<?php
/**
* 
* Payment Core para Magento 2
* 
* @category     Dholi
* @package      Modulo Payment Core
* @copyright    Copyright (c) 2020 dholi (https://www.dholi.dev)
* @version      1.1.0
* @license      https://opensource.org/licenses/OSL-3.0
* @license      https://opensource.org/licenses/AFL-3.0
*
*/
declare(strict_types=1);

namespace Dholi\Payment\Helper;

class Data extends \Magento\Framework\App\Helper\AbstractHelper {

	public function __construct(\Magento\Framework\App\Helper\Context $context) {
		parent::__construct($context);
	}
}