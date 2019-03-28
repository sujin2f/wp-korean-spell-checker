/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/korean-spell-checker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/korean-spell-checker.js":
/*!************************************************!*\
  !*** ./assets/scripts/korean-spell-checker.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


jQuery(document).ready(function ($) {
  window.tinymce.create('tinymce.plugins.koreanSpellChecker', {
    init: function init(editor) {
      editor.addCommand('open_korean_spell_checker', function () {
        var text = editor.getContent({ format: 'text' });
        $('<form/>', {
          id: '#korean_spell_checker',
          target: '_blank',
          action: 'http://speller.cs.pusan.ac.kr/results',
          method: 'POST',
          html: '<textarea name="text1"></textarea>'
        }).appendTo('body');
        $('form#KSC_form textarea').html(text);
        $('form#KSC_form').submit();
        $('form#KSC_form').remove();
      });

      // Register buttons
      editor.addButton('korean_spell', {
        title: '한국어 맞춤법 검사기를 열어요.',
        cmd: 'open_korean_spell_checker'
      });
    },
    getInfo: function getInfo() {
      return {
        longname: 'Korean Spell Checker',
        author: 'sujin',
        authorurl: 'http://www.sujinc.com',
        infourl: '',
        version: '1.0'
      };
    }
  });

  // Register plugin
  window.tinymce.PluginManager.add('korean_spell', window.tinymce.plugins.koreanSpellChecker);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMva29yZWFuLXNwZWxsLWNoZWNrZXIuanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJ3aW5kb3ciLCJ0aW55bWNlIiwiY3JlYXRlIiwiaW5pdCIsImVkaXRvciIsImFkZENvbW1hbmQiLCJ0ZXh0IiwiZ2V0Q29udGVudCIsImZvcm1hdCIsImlkIiwidGFyZ2V0IiwiYWN0aW9uIiwibWV0aG9kIiwiaHRtbCIsImFwcGVuZFRvIiwic3VibWl0IiwicmVtb3ZlIiwiYWRkQnV0dG9uIiwidGl0bGUiLCJjbWQiLCJnZXRJbmZvIiwibG9uZ25hbWUiLCJhdXRob3IiLCJhdXRob3J1cmwiLCJpbmZvdXJsIiwidmVyc2lvbiIsIlBsdWdpbk1hbmFnZXIiLCJhZGQiLCJwbHVnaW5zIiwia29yZWFuU3BlbGxDaGVja2VyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkFBLE9BQU9DLFFBQVAsRUFBaUJDLEtBQWpCLENBQXVCLFVBQUNDLENBQUQsRUFBTztBQUM1QkMsU0FBT0MsT0FBUCxDQUFlQyxNQUFmLENBQXNCLG9DQUF0QixFQUE0RDtBQUMxREMsVUFBTSxjQUFDQyxNQUFELEVBQVk7QUFDaEJBLGFBQU9DLFVBQVAsQ0FBa0IsMkJBQWxCLEVBQStDLFlBQU07QUFDbkQsWUFBTUMsT0FBT0YsT0FBT0csVUFBUCxDQUFrQixFQUFFQyxRQUFRLE1BQVYsRUFBbEIsQ0FBYjtBQUNBVCxVQUFFLFNBQUYsRUFBYTtBQUNYVSxjQUFJLHVCQURPO0FBRVhDLGtCQUFRLFFBRkc7QUFHWEMsa0JBQVEsdUNBSEc7QUFJWEMsa0JBQVEsTUFKRztBQUtYQyxnQkFBTTtBQUxLLFNBQWIsRUFNR0MsUUFOSCxDQU1ZLE1BTlo7QUFPQWYsVUFBRSx3QkFBRixFQUE0QmMsSUFBNUIsQ0FBaUNQLElBQWpDO0FBQ0FQLFVBQUUsZUFBRixFQUFtQmdCLE1BQW5CO0FBQ0FoQixVQUFFLGVBQUYsRUFBbUJpQixNQUFuQjtBQUNELE9BWkQ7O0FBY0E7QUFDQVosYUFBT2EsU0FBUCxDQUFpQixjQUFqQixFQUFpQztBQUMvQkMsZUFBTyxtQkFEd0I7QUFFL0JDLGFBQUs7QUFGMEIsT0FBakM7QUFJRCxLQXJCeUQ7QUFzQjFEQyxhQUFTO0FBQUEsYUFBTztBQUNkQyxrQkFBVSxzQkFESTtBQUVkQyxnQkFBUSxPQUZNO0FBR2RDLG1CQUFXLHVCQUhHO0FBSWRDLGlCQUFTLEVBSks7QUFLZEMsaUJBQVM7QUFMSyxPQUFQO0FBQUE7QUF0QmlELEdBQTVEOztBQStCQTtBQUNBekIsU0FBT0MsT0FBUCxDQUFleUIsYUFBZixDQUE2QkMsR0FBN0IsQ0FBaUMsY0FBakMsRUFBaUQzQixPQUFPQyxPQUFQLENBQWUyQixPQUFmLENBQXVCQyxrQkFBeEU7QUFDRCxDQWxDRCxFIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL3NjcmlwdHMva29yZWFuLXNwZWxsLWNoZWNrZXIuanNcIik7XG4iLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KCgkKSA9PiB7XG4gIHdpbmRvdy50aW55bWNlLmNyZWF0ZSgndGlueW1jZS5wbHVnaW5zLmtvcmVhblNwZWxsQ2hlY2tlcicsIHtcbiAgICBpbml0OiAoZWRpdG9yKSA9PiB7XG4gICAgICBlZGl0b3IuYWRkQ29tbWFuZCgnb3Blbl9rb3JlYW5fc3BlbGxfY2hlY2tlcicsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGVkaXRvci5nZXRDb250ZW50KHsgZm9ybWF0OiAndGV4dCcgfSk7XG4gICAgICAgICQoJzxmb3JtLz4nLCB7XG4gICAgICAgICAgaWQ6ICcja29yZWFuX3NwZWxsX2NoZWNrZXInLFxuICAgICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgICAgYWN0aW9uOiAnaHR0cDovL3NwZWxsZXIuY3MucHVzYW4uYWMua3IvcmVzdWx0cycsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaHRtbDogJzx0ZXh0YXJlYSBuYW1lPVwidGV4dDFcIj48L3RleHRhcmVhPicsXG4gICAgICAgIH0pLmFwcGVuZFRvKCdib2R5Jyk7XG4gICAgICAgICQoJ2Zvcm0jS1NDX2Zvcm0gdGV4dGFyZWEnKS5odG1sKHRleHQpO1xuICAgICAgICAkKCdmb3JtI0tTQ19mb3JtJykuc3VibWl0KCk7XG4gICAgICAgICQoJ2Zvcm0jS1NDX2Zvcm0nKS5yZW1vdmUoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZWdpc3RlciBidXR0b25zXG4gICAgICBlZGl0b3IuYWRkQnV0dG9uKCdrb3JlYW5fc3BlbGwnLCB7XG4gICAgICAgIHRpdGxlOiAn7ZWc6rWt7Ja0IOunnuy2pOuylSDqsoDsgqzquLDrpbwg7Je07Ja07JqULicsXG4gICAgICAgIGNtZDogJ29wZW5fa29yZWFuX3NwZWxsX2NoZWNrZXInLFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRJbmZvOiAoKSA9PiAoe1xuICAgICAgbG9uZ25hbWU6ICdLb3JlYW4gU3BlbGwgQ2hlY2tlcicsXG4gICAgICBhdXRob3I6ICdzdWppbicsXG4gICAgICBhdXRob3J1cmw6ICdodHRwOi8vd3d3LnN1amluYy5jb20nLFxuICAgICAgaW5mb3VybDogJycsXG4gICAgICB2ZXJzaW9uOiAnMS4wJyxcbiAgICB9KSxcbiAgfSk7XG5cbiAgLy8gUmVnaXN0ZXIgcGx1Z2luXG4gIHdpbmRvdy50aW55bWNlLlBsdWdpbk1hbmFnZXIuYWRkKCdrb3JlYW5fc3BlbGwnLCB3aW5kb3cudGlueW1jZS5wbHVnaW5zLmtvcmVhblNwZWxsQ2hlY2tlcik7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=