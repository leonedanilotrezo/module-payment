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

namespace Dholi\Payment\Api;

/**
 * Interface for Totals.
 * @api
 * @since 100.0.2
 */
interface TotalsInterface {
	
	/**
	 * Reload totals.
	 *
	 * @param \Magento\Quote\Api\Data\PaymentInterface $paymentMethod
	 * @param string $shippingAmount
	 * @return string
	 * @throws \Magento\Framework\Exception\LocalizedException
	 */
	public function reload(\Magento\Quote\Api\Data\PaymentInterface $paymentMethod, $shippingAmount);
}