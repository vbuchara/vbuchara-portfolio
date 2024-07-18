<?php
namespace VBucharaPortfolio\Helpers;

class StringHelpers {
    public static function remove_http(string $url) {
        $httpProtocols = ['http://', 'https://'];

        foreach($httpProtocols as $protocol) {
            if(strpos($url, $protocol) === 0) {
                return str_replace($protocol, '', $url);
            }
        }
        
        return $url;
    }
}