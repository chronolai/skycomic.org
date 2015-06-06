<?php

function set_cdnlink () {
	if (is_country()) {
		define('CDN_LINK', CDN_LINK_TW);
	} else {
		define('CDN_LINK', CDN_LINK_US);
	}
}