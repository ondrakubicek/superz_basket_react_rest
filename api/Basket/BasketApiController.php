<?php

class BasketApiController implements IApiController {

	/**
	 * @var Basket
	 */
	private $basket;

	public function __construct() {
	}

	private function getRequestMethod() {
		return $_SERVER['REQUEST_METHOD'];
	}

	public function getName() {
		return "basket";
	}

	public function processRequest(array $urlParams) {
		switch ($this->getRequestMethod()) {
			case 'GET':
				$response = $this->get();
				break;
			case 'DELETE':
				$id = isset($urlParams[2])? (int)$urlParams[2] : 0;
				$response = $this->delete($id);
				break;
			case 'PUT':
				$id = isset($urlParams[2])? (int)$urlParams[2] : 0;
				$response = $this->put($id);
				break;
			default:
				break;
		}
		header($response['status_code_header']);
		if ($response['body']) {
			echo $response['body'];
		}
		die();
	}

	private function get() {
		Basket::identify_user();
		$result = Basket::get();
		$response['body'] = json_encode($result);
		$response['status_code_header'] = 'HTTP/1.1 200 OK';
		return $response;
	}

	/**
	 * @param int $id
	 */
	private function delete($id) {
		Basket::identify_user();
		Basket::remove($id);
		$response['status_code_header'] = 'HTTP/1.1 200 OK';
		return $response;
	}


	/**
	 * @param int $id
	 */
	private function put($id) {
		$data=json_decode(file_get_contents('php://input'),1);
		$quantity = $data["quantity"];
		Basket::identify_user();
		if ($quantity <= 0) {
			Basket::remove($id);
		} else {
			Basket::updateQuantity($id,$quantity);
		}
		$response['status_code_header'] = 'HTTP/1.1 200 OK';
		return $response;
	}

}
