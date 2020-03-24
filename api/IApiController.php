<?php

interface IApiController {

	/**
	 * @param array $urlParams
	 * @return mixed
	 */
	public function processRequest(array $urlParams);
	public function getName();
}
