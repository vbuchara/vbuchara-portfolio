<?php 

namespace VBucharaPortfolio\Helpers;

use WP_REST_Request;

class RequestHelpers {
    public static function get_meta_queries(WP_REST_Request $request){
        $params = $request->get_params();
    
        $meta_query_param_filter = fn(string $key) => str_starts_with($key, "meta_query_");
        $meta_query_params = array_filter($params, $meta_query_param_filter, ARRAY_FILTER_USE_KEY);
        $meta_query = array_reduce(array_keys($meta_query_params), function(
            array $meta_query, 
            string $param
        ) use($meta_query_params){
            $metaQueryAttrWithNumber = str_replace("meta_query_", "", $param);
            $metaQueryAttr = preg_replace(["/_/", "/\d/"], "", $metaQueryAttrWithNumber);
    
            $indexString = substr($metaQueryAttrWithNumber, -1);
            $index = is_numeric($indexString) ? (int) $indexString : 0;
    
            return [
                ...$meta_query,
                $index => array_merge([
                    $metaQueryAttr => $meta_query_params[$param]
                ], isset($meta_query[$index]) ? $meta_query[$index] : [])
            ];
        }, []);
    
        return $meta_query;
    }

    public static function get_orderby(WP_REST_Request $request){
        $params = $request->get_params();

        $orderby_param_filter = fn(string $key) => str_starts_with($key, "orderby_");
        $orderby_params = array_filter($params, $orderby_param_filter, ARRAY_FILTER_USE_KEY);

        if(count($orderby_params) <= 0) return $request->get_param("orderby");

        $orderby = array_reduce(array_keys($orderby_params), function(
            array $orderby, 
            string $param
        ) use ($orderby_params){
            $orderbyAttr = str_replace("orderby_", "", $param);

            return array_merge($orderby, [
                $orderbyAttr => $orderby_params[$param]
            ]);
        }, []);

        return $orderby;
    }
}