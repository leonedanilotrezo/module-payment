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

namespace Dholi\Payment;

class TotalsApllyMode {

	const REQUEST = 'REQUEST';

	const TOTALS = 'TOTALS';

	const NOT = 'NOT';

	private $value;

	public function applyByRequest() {
		$this->value = self::REQUEST;
		return $this;
	}

	public function isApplyByRequest() {
		return $this->value == self::REQUEST;
	}

	public function applyByTotals() {
		$this->value = self::TOTALS;
		return $this;
	}

	public function isApplyByTotals() {
		return $this->value == self::TOTALS;
	}

	public function notApply() {
		$this->value = self::NOT;
		return $this;
	}

	public function isNotApply() {
		return $this->value == self::NOT;
	}

	public function isApply() {
		return ($this->isApplyByRequest() || $this->isApplyByTotals());
	}

	/**
	 * @return mixed
	 */
	public function getValue() {
		return $this->value;
	}
}