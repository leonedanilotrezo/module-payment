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

namespace Dholi\Payment\Controller\Checkout;

use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;
use Magento\Framework\App\ResponseInterface;
use Magento\Framework\Controller\Result\ForwardFactory;
use Magento\Framework\Controller\ResultInterface;
use Magento\Framework\View\LayoutFactory;
use Magento\Quote\Model\Quote;
use Magento\Checkout\Model\Cart;
use Psr\Log\LoggerInterface;

class PaymentMethod extends Action {

	/**
	 * @var LoggerInterface
	 */
	private $logger;

	/**
	 * @var ForwardFactory
	 */
	protected $resultForwardFactory;

	/**
	 * @var LayoutFactory
	 */
	protected $layoutFactory;

	/**
	 * @var Cart
	 */
	protected $cart;

	/**
	 * @param Context $context
	 * @param LayoutFactory $layoutFactory
	 * @param ForwardFactory $resultForwardFactory
	 */
	public function __construct(Context $context,
	                            ForwardFactory $resultForwardFactory,
	                            LayoutFactory $layoutFactory,
	                            Cart $cart,
	                            LoggerInterface $logger
	) {
		$this->resultForwardFactory = $resultForwardFactory;
		$this->layoutFactory = $layoutFactory;
		$this->cart = $cart;
		$this->logger = $logger;

		parent::__construct($context);
	}

	/**
	 * @return ResponseInterface|ResultInterface|void
	 * @throws \Exception
	 */
	public function execute() {
		$data = $this->getRequest()->getParam('payment_method');
		$data2 = $this->getRequest()->getParam('payment');
		if(isset($data['method']) || isset($data2['method'])) {
			$quote = $this->cart->getQuote();

			if(isset($data['method'])) {
				$quote->getPayment()->setMethod($data['method']);
			}
			if(isset($data2['method'])) {
				$quote->getPayment()->setMethod($data2['method']);
			}
			$quote->setTotalsCollectedFlag(false)->collectTotals()->save();
		}
	}

}