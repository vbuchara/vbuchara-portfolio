<?php

namespace VBucharaPortfolio\Classes;

use Ds\Map;
use Exception;

class InlineStyle {

    /**
     * @var Map<string, string>
     */
    private $propertiesMap = null;

    /**
     * @param array<string, string>|null $style
     */
    public function __construct(array $style = []) {
        $this->propertiesMap = new Map();
        
        if(empty($style)) return;

        foreach ($style as $key => $value) {
            $this->propertiesMap->put($key, $value);
        }
    }
    public function getProperty(string $key){
        try {
            return $this->propertiesMap->get($key);
        } catch(Exception $exception) {
            return null;
        }
    }

    public function setProperty(string $key, string $value){
        $this->propertiesMap->put($key, $value);
    }

    public function removeProperty(string $key){
        try {
            return $this->propertiesMap->remove($key);
        } catch(Exception $exception) {
            return null;
        }
    }

    public function getStyleString(): string {
        return $this->propertiesMap->reduce(function(string $result, string $key, string $value){
            if(empty($result)) return "$key: $value;";

            return "$result $key: $value;";
        }, "");
    }
}