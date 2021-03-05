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

namespace Dholi\Payment\Model;

use Dholi\Payment\Api\TotalsInterface;
use Magento\Checkout\Model\Cart;
use Magento\Framework\App\ObjectManager;
use Magento\Framework\Serialize\Serializer\Json;
use Magento\Quote\Api\Data\PaymentInterface;

class Totals implements TotalsInterface {
	
	private $serializer;
	
	/**
	 * @var Cart
	 */
	protected $cart;
	
	public function __construct(Json $serializer = null, Cart $cart) {
		$this->serializer = $serializer ?: ObjectManager::getInstance()->get(Json::class);
		$this->cart = $cart;
	}
	
	/**
	 * @inheritDoc
	 */
	public function reload(PaymentInterface $paymentMethod, $shippingAmount) {
		if (isset($paymentMethod)) {
			$quote = $this->cart->getQuote();
			$quote->getPayment()->setMethod($paymentMethod->getMethod());
			$quote->setTotalsCollectedFlag(false)->collectTotals()->save();
		}
		
		return $this->serializer->serialize(['success' => true]);
	}
}