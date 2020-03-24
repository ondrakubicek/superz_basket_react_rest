<?php

class UserApiController implements IApiController {

	public function __construct() {
	}

	private function getRequestMethod() {
		return $_SERVER['REQUEST_METHOD'];
	}

	public function getName() {
		return "user";
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

	private function get() {
		/* @var ClienteleService $clientele */
		$clientele = ClienteleService::getInstance();
		$result = $clientele->getById(1);
		$response['status_code_header'] = 'HTTP/1.1 200 OK';
		$response['body'] = json_encode($result->getJsonData());
		return $response;
	}

}
