<?php
namespace VBucharaPortfolio\Helpers;

use Closure;

class ArrayHelpers {
    /**
     * @param array $array
     * @param Closure(mixed $left, mixed $right): int $callback void
     */
    public static function array_sort(
        array $array,
        Closure $callback
    ){
        usort($array, $callback);

        return $array;
    } 
}
