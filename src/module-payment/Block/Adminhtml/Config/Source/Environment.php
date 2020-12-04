<?php
/**
* 
* Payment Core para Magento 2
* 
* @category     Dholi
* @package      Modulo Payment Core
* @copyright    Copyright (c) 2020 dholi (https://www.dholi.dev)
* @version      1.0.1
* @license      https://opensource.org/licenses/OSL-3.0
* @license      https://opensource.org/licenses/AFL-3.0
*
*/
declare(strict_types=1);

namespace Dholi\Payment\Block\Adminhtml\Config\Source;

class Environment implements \Magento\Framework\Option\ArrayInterface {

	const PRODUCTION = 'production';
	const SANDBOX = 'sandbox';
	/**
	 * {@inheritdoc}
	 */
	public function toOptionArray() {
		return [
			['value' => self::PRODUCTION, 'label' => __('Production')],
			['value' => self::SANDBOX, 'label' => __('Sandbox')]
		];
	}
}