<?php

class Dbdelay {
	function __construct () {
		$this->CI =& get_instance();
		$this->redis = False;
		if (class_exists('redis')) {
			$this->redis = new Redis();
			$this->redis->connect('ensky.tw', 6379, 2.5);
		}
	}

	function query ($query) {
		if ($this->redis)
			$this->redis->publish('dbdelay', $query);
		else
			$this->CI->db->query($query);
		return $this;
	}
}