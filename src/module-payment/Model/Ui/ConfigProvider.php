<?php
/**
* 
* Payment Core para Magento 2
* 
* @category     Dholi
* @package      Modulo Payment Core
* @copyright    Copyright (c) 2020 dholi (https://www.dholi.dev)
* @version      1.1.1
* @license      https://opensource.org/licenses/OSL-3.0
* @license      https://opensource.org/licenses/AFL-3.0
*
*/
declare(strict_types=1);

namespace Dholi\Payment\Model\Ui;

class ConfigProvider implements \Magento\Checkout\Model\ConfigProviderInterface {

	const CODE = 'dholi_payments';

	protected $assetRepo;
	protected $urlBuilder;

	public function __construct(\Magento\Framework\View\Asset\Repository $assetRepo,
	                            \Magento\Framework\UrlInterface $urlBuilder) {
		$this->assetRepo = $assetRepo;
		$this->urlBuilder = $urlBuilder;
	}

	public function getConfig() {
		return [
			'payment' => [
				self::CODE => [
					'paymentMethodUrl' => $this->urlBuilder->getUrl('dholipayment/checkout/paymentMethod', ['_secure' => true]),
					'icons' => [
						'visa' => [
							'height' => 30,
							'width' => 46,
							'url' => $this->assetRepo->getUrl("Dholi_Payment::images/cc/visa.png")
						]
					],
				],
			]
		];
	}
}