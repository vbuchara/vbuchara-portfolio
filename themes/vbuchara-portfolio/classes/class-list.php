<?php 

namespace VBucharaPortfolio\Classes;

use Ds\Set;
use VBucharaPortfolio\Helpers\DomHelpers;

class ClassList {

    /**
     * @var Set<string>
     */
    private $classList = null;

    /**
     * @param string|array|Set<string>|null $classes
     */
    public function __construct(string|array|Set|null $classes = null) {
        $this->classList = new Set();

        if(is_string($classes)){
            $this->classList = new Set(explode(" ", $classes));
        }

        if(is_array($classes)){
            $this->classList = new Set($classes);
        }

        if($classes instanceof Set){
            $this->classList = new Set($classes);
        }
    }

    /**
     * @return Set<string>
     */
    public function getClassListSet(){
        return $this->classList;
    }

    public function addClass(string $class){
        $this->classList->add($class);
    }

    public function removeClass(string $class){
        $this->classList->remove($class);
    }

    public function toggleClass(string $class){
        if($this->classList->contains($class)){
            $this->removeClass($class);
        } else {
            $this->addClass($class);
        }
    }

    public function replaceClass(string $classToReplace, string $newClass){
        if($this->classList->contains($classToReplace)){
            $this->removeClass($classToReplace);
            $this->addClass($newClass);
        }
    }

    public function hasClass(string $class): bool {
        return $this->classList->contains($class);
    }

    public function getClassListString(): string {
        return DomHelpers::get_class_string_from_set($this->classList);
    }
}