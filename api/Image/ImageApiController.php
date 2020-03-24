<?php

use SS5\Models\Category\Image\CategoryImageService;

class ImageApiController implements IApiController {

	/**
	 * @var ProductGalleryService
	 */
	private $productGalleryService;
	/**
	 * @var Domain
	 */
	private $domain;
	/**
	 * @var CategoryImageService
	 */
	private $categoryImageService;

	/**
	 * ImageApiController constructor.
	 * @param ProductGalleryService $productGalleryService
	 * @param Domain $domain
	 * @param CategoryImageService $categoryImageService
	 */
	public function __construct(ProductGalleryService $productGalleryService, Domain $domain, CategoryImageService
	$categoryImageService) {
		$this->productGalleryService = $productGalleryService;
		$this->domain = $domain;
		$this->categoryImageService = $categoryImageService;
	}

	private function getRequestMethod() {
		return $_SERVER['REQUEST_METHOD'];
	}

	public function getName() {
		return "image";
	}

	public function processRequest(array $urlParams) {
		switch ($this->getRequestMethod()) {
			case 'GET':
				$type = isset($urlParams[2])? $urlParams[2] : "mini_product";
				$id = isset($urlParams[3])? (int)$urlParams[3] : 0;
				$response = $this->get($id, $type);
				break;
			default:
				break;
		}
		header($response['status_code_header']);
		if ($response['body']) {
			echo $response['body'];
		}
	}

	private function get($id, $type) {
		$response['status_code_header'] = 'HTTP/1.1 200 OK';
		$mainImageId = $this->productGalleryService->getProductGlobalMainImageId($id, $this->domain->getId(),1);
		$image["url"] = SmartyCustom::img([
			'gallery' => $type,
			'id' => $mainImageId,
			'alt' => "xx",
			'only_url' => true
		]);
		$response['body'] = json_encode($image);
		return $response;
	}
}
