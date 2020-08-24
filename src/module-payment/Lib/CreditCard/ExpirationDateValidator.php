<?php

namespace Dholi\Payment\Lib\CreditCard;

use DateTime;
use DateTimeZone;

class ExpirationDateValidator {
	/**
	 * @var string
	 */
	protected $year;

	/**
	 * @var string
	 */
	protected $month;

	/**
	 * ExpirationDateValidator constructor.
	 *
	 * @param string $year
	 * @param string $month
	 */
	public function __construct(string $year, string $month) {
		$this->setYear($year);
		$this->month = trim($month);
	}

	/**
	 * @param $year
	 *
	 * @return $this
	 */
	protected function setYear($year) {
		$year = trim($year);

		if (strlen($year) == 2) {
			$year = substr(date('Y'), 0, 2) . $year;
		}

		$this->year = $year;

		return $this;
	}

	/**
	 * @param string $year
	 * @param string $month
	 *
	 * @return mixed
	 */
	public static function validate(string $year, string $month) {
		return (new static($year, $month))->isValid();
	}

	/**
	 * @return bool
	 */
	public function isValid() {
		return $this->isValidYear()
			&& $this->isValidMonth()
			&& $this->isFeatureDate();
	}

	/**
	 * @return bool
	 */
	protected function isValidYear() {
		$test = '/^' . substr(date('Y'), 0, 2) . '\d\d$/';

		return $this->year != ''
			&& preg_match($test, $this->year);
	}

	/**
	 * @return bool
	 */
	protected function isValidMonth() {
		return $this->month != ''
			&& $this->month() != '00'
			&& preg_match('/^(0[1-9]|1[0-2])$/', $this->month());
	}

	/**
	 * @return string
	 */
	protected function month() {
		return str_pad($this->month, 2, '0', STR_PAD_LEFT);
	}

	/**
	 * @return bool
	 */
	protected function isFeatureDate() {
		$timeZone = new DateTimeZone('America/Sao_Paulo');
		$currentDate = (new DateTime('now', $timeZone));

		$endOfDay = (new DateTime($this->year . '-' . $this->month(), $timeZone));
		$endOfDay->modify('last day of');

		return $endOfDay > $currentDate;
	}
}
