<?php

class TransportApiController implements IApiController {

	public function __construct() {
	}

	private function getRequestMethod() {
		return $_SERVER['REQUEST_METHOD'];
	}

	public function getName() {
		return "transport";
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
		$transportsLib = ServiceFactory::getInstance()->getServiceByName("Transports");
		$transports = $transportsLib->getTransports(Transports::ONLY_NONPERSONAL_TAKES, false, true);
		$response['status_code_header'] = 'HTTP/1.1 200 OK';
		$response['body'] = json_encode(array_values($transports));
		return $response;
	}

}

/**
* Načte možné typy dopravy

private function loadTransports() {
$this->nonPersonalTakeTransports
= $this->transportsLibrary->getTransports(Transports::ONLY_NONPERSONAL_TAKES, false, true);

foreach ($this->nonPersonalTakeTransports as $key => $transport) {
$this->nonPersonalTakeTransports[$key]['disable_invoice_address'] =
in_array($transport['special'], ['personal']) ? '1' : '';
$this->nonPersonalTakeTransports[$key]['disable_delivery_address'] =
in_array($transport['special'], ['personal', 'omniva', TransportMethod::DPD_LV, 'circlek', 'zasilkovna', 'postomat', 'Zasilkovna']) ? '1' : '';
if ($this->trans == $key && $this->nonPersonalTakeTransports[$key]['unavailable']) {
$this->trans = 0;
}
};
$this->personalTakeTransports = $this->transportsLibrary->getTransports(Transports::ONLY_PERSONAL_TAKES);
if ($this->render->isPage(Url::URL_TYPE_ORDER_DONE)) {
$this->allTransports = $this->transportsLibrary->getTransports(
Transports::ALL_TRANSPORTS_IGNORING_TRANSPORT_CATEGORIES
);
} else {
$this->allTransports = $this->transportsLibrary->getTransports(Transports::ALL_TRANSPORTS);
}
$postedTransportId = (int)$this->POST['transport']->getValue();
if ($postedTransportId > 0) {
$this->trans = $postedTransportId;
}
}
 */
