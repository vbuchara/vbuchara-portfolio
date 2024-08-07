<?php
namespace VBucharaPortfolio\Helpers;

class DebugHelpers {
    public static function dd($value) {
        if(!WP_DEBUG || !WP_DEBUG_DISPLAY) return;

        echo '<pre>';
        print_r(is_string($value) ? esc_html($value) : $value);
        echo '</pre>';
    }
}