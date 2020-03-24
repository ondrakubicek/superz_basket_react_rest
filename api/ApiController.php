<?php

class ApiController {

	/**
	 * @var IApiController[]
	 */
	private $controllersList = [];

	/**
	 * ApiController constructor.
	 * @param BasketApiController $basketApiController
	 * @param UserApiController $userApiController
	 * @param ImageApiController $imageApiController
	 * @param TransportApiController $transportApiController
	 * @param CouponeApiControler $couponeApiControler
	 */
	public function __construct(
		BasketApiController $basketApiController,
		UserApiController $userApiController,
		ImageApiController $imageApiController,
		TransportApiController $transportApiController,
		CouponeApiControler $couponeApiControler
	) {
		$this->registerApiController($basketApiController);
		$this->registerApiController($userApiController);
		$this->registerApiController($imageApiController);
		$this->registerApiController($transportApiController);
		$this->registerApiController($couponeApiControler);
	}

	public function registerApiController(IApiController $apiController) {
		$name = $apiController->getName();
		if (!in_array($name, $this->controllersList)) {
			$this->controllersList[$name] = $apiController;
		}
	}

	/**
	 * @param string $controllerName
	 * @param array $urlParams
	 */
	public function processRequest($controllerName, array $urlParams) {
		if (isset($this->controllersList[$controllerName])) {
			$this->controllersList[$controllerName]->processRequest($urlParams);
		}
		exit;
	}
}
