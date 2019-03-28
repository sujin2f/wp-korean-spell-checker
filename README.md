# 한글 맞춤법 검사기 - Korean Spell Checker!
This is the repository for the unified WordPress code used across all Postmedia themes. Referred to as the 'monorepo' this repository contains all WordPress plugin and themes.

If you're looking for help with getting your VM working, please visit the documentation in the Infrastructure repo.

## How-To
* [How to import a plugin into the Postmedia Library](docs/HOWTO.Import_plugin_into_library)

### Tips&Tricks
* [Debugging WordPress in your VM with Microsoft Visual Studio Code](https://github.com/Postmedia-Digital/postmedia-infrastructure/blob/master/docs/README.WORDPRESS_DEBUG.md)
* [PHP speed analyse with X-Debug Profile](docs/README.XDEBUG_PROFILE.md)

## Contributing:
* For creating branches, [follow the release train branching instructions](docs/HOWTO.Release_train_branching.md).
* [Run PHPCS on your code before committing it](docs/HOWTO.Run_code_standards_checks.md)
* [Run unit tests on your code before committing it](docs/HOWTO.Run_unit_tests.md)
* You can commit your code in a new branch and submit a pull request that will be merge upon review by a [code owner](CODEOWNERS)
* [Markdown - how this page is formatted](https://en.wikipedia.org/wiki/Markdown)






Contributors: sujin2f
Donate link: http://www.sujinc.com/lab/korean-spell-checker/
Tags: korean, spell, tinymce, 한글
Requires at least: 2.8
Tested up to: 4.4
Stable tag: 4.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

워드프레스 리치 에디터에 한글 맞춤법 검사기로 바로 가는 버튼을 삽입합니다.

== Description ==

워드프레스 리치 에디터에 한글 맞춤법 검사기로 바로 가는 버튼을 삽입합니다. 이제 쪽팔리게 맞춤법 틀리지 마세요. (저도 못하지만)

== Installation ==

1. 플러그인을 다운로드하여 압축을 해제해주세요

2. 플러그인 디렉토리에 넣어주세요

3. 플러그인 관리 페이지에서 활성화 시키세요

== Screenshots ==

1. 맞춤법 검사기 버튼

== Changelog ==
= 4.0.0 =
* 부산대 API 주소 수정
* SCSS, ES6, PHPCS 적용
* Gutenberg 지원

= 3.1 =
* 에러 수정

= 2.0 =
* 텍스트 에디터 안의 내용을 나라인포테크의 맞춤법 검사기 안으로 보낼 수 있도록 수정 (이제 좀 쓸만해짐)

= 1.0 =
* 최초 버전
