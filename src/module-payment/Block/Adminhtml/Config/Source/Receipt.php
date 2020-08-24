<?php
/**
* 
* Payment Core para Magento 2
* 
* @category     Dholi
* @package      Modulo Payment Core
* @copyright    Copyright (c) 2020 dholi (https://www.dholi.dev)
* @version      1.0.0
* @license      https://opensource.org/licenses/OSL-3.0
* @license      https://opensource.org/licenses/AFL-3.0
*
*/
declare(strict_types=1);

namespace Dholi\Payment\Block\Adminhtml\Config\Source;

class Receipt implements \Magento\Framework\Option\ArrayInterface {
	/**
	 * {@inheritdoc}
	 */
	public function toOptionArray() {
		return [
			['value' => 'A', 'label' => __('Por Antecipação')],
			['value' => 'F', 'label' => __('Fluxo')]
		];
	}
}