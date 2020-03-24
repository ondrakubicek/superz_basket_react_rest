<?php

class CouponeApiControler implements IApiController {

	/**
	 * @var Database
	 */
	private $database;
	/**
	 * @var Auth
	 */
	private $auth;
	/**
	 * @var Domain
	 */
	private $domain;

	/**
	 * TransportApiController constructor.
	 * @param Database $database
	 * @param Auth $auth
	 * @param Domain $domain
	 */
	public function __construct(Database $database, Auth $auth, Domain $domain) {
		$this->database = $database;
		$this->auth = $auth;
		$this->domain = $domain;
	}

	private function getRequestMethod() {
		return $_SERVER['REQUEST_METHOD'];
	}

	public function getName() {
		return "coupone";
	}

	public function processRequest(array $urlParams) {
		switch ($this->getRequestMethod()) {
			case 'GET':
				$response = $this->get();
				break;
			default:
				break;
		}
		header($response['status_code_header']);
		if ($response['body']) {
			echo $response['body'];
		}
	}

	private function loadAvailableCoupones() {
		if ($this->auth->logged) {
			$this->database->prepare('
				SELECT *
				FROM `coupone`
				WHERE (`client` = ?
				OR `client` = ?)
				AND `used` = "n"
				AND `expire` > ?
				AND `domain` = ?
				AND `currency` = ?
			');
			$currencyId = $this->domain->getCurrencyId();
			$this->database->execute($this->auth->getClientId(), $this->auth->user_data['email'], time(),
				$this->domain->getId(), $currencyId);
			return $this->database->fetch_all_assoc();
		}
		return [];
	}

	private function get() {
		$response['status_code_header'] = 'HTTP/1.1 200 OK';
		$response['body'] = json_encode($this->loadAvailableCoupones());
		return $response;
	}

}
