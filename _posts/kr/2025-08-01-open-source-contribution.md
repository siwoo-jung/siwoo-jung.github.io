---
title: 오픈소스 프로젝트에 기여하는 방법 - 초보자 가이드
description: Microsoft 오픈소스 프로젝트에 기여하면서 겪은 시행착오들
date: 2025-07-31 23:22:00 +1000
categories:
tags:
pin: true
math: false
mermaid: true
image:
  path: assets/img/posts/presidio-contribution.png
  alt: 오픈소스 기여
lang: kr
slug: how-to-contribute-to-open-source-projects-kr
---

## 소개

---

개인적으로 소프트웨어 산업의 예술은 오픈소스 생태계의 본질에 있다고 생각한다. 누구나 소프트웨어 코드를 보고, 사용하고, 수정하고, 배포할 수 있게 한다. 이런 협업적인 소프트웨어 개발 방식 덕분에 Linux OS나 Python 같은 인기 있는 기술들이 탄생했다.

프로그래밍 지식과 프로필을 향상시키기 위해 Microsoft의 [Presidio](https://github.com/microsoft/presidio) 프로젝트에 적극적으로 기여했는데, 이 글에서 자세히 설명하겠다.

## 오픈소스 프로젝트에 기여하는 이유

---

오픈소스 프로젝트에 기여하면 여러 가지 이점이 있다. 특히 학생이나 주니어 소프트웨어 엔지니어에게는 더욱 그렇다.

- 코드 리뷰 과정이나 협업 개발 같은 실제 경험을 제공한다.

- 다른 사람의 코드를 읽고 이해하고, 대규모 소프트웨어 아키텍처와 상호작용하면서 훌륭한 학습 기회를 제공한다.

- 이력서에 좋다. 오픈소스 프로젝트에 기여하는 것은 코딩 능력과 팀워크 스킬을 보여주기 때문이다. 그렇기에 이력서에 한 줄 추가할 수 있다.

## 기여할 오픈소스 프로젝트 찾는 방법

---

가장 먼저 마주하게 될 문제는 기여할 오픈소스 프로젝트를 찾는 것이다.

**1. 이미 익숙한 라이브러리나 모듈**

자주 사용하는 라이브러리나 모듈을 알고 있다면, 이미 코드베이스에 꽤 익숙하고 그 오픈소스 프로젝트에서 이슈를 찾기 쉽다.

**2. Good-first-issue 라벨**

![OMSCS Specializations]({{ '/assets/img/posts/presidio-good-first-issue.png' | relative_url }}){: width="400" height="400" }
_Good First Issue 라벨_

`Issues`에서 `good first issue` 라벨을 검색할 수도 있다. 그런 `good first issue` 라벨들은 보통 소유자들이 상대적으로 가벼운 이슈이고 초보자도 해결할 수 있다고 생각해서 할당한 것이다.

> `good first issue` 목록을 보여주는 웹사이트들도 있다.
{: .prompt-info }

**3. 문서**

코드베이스를 개선하는 것이 기업 채용 관점에서는 의미 있지만, 문서를 개선하면서 오픈소스 기여에 발을 들일 수도 있다. 공식 문서를 살펴보고 오타나 문법 오류를 찾아볼 수 있다. 영한 번역등으로도 기여할 수 있다.

## 오픈소스 프로젝트에 기여하는 방법

오픈소스 프로젝트에 기여하는 것은 단순히 코드를 작성하는 것뿐만 아니라, 문서 개선, 버그 신고, 새로운 기능 제안으로도 기여할 수 있다. 하지만 오픈소스 기여는 보통 PR(pull request)을 만들고 main/master 브랜치에 머지(merge)될 때로 간주한다. 따라서 가장 중요한 지식은 **Pull Request**다.

다음 글에서는 pull request를 올리는 단계별 가이드를 공유하겠다.

## 내가 기여한 것들

이 글에서는 Microsoft의 Presidio에 기여한 두 가지 샘플 기여 사례를 공유하겠다.

**1. 문서 및 함수 타입 개선**

PR 링크: 
[#1547](https://github.com/microsoft/presidio/pull/1547/) 및
[#1549](https://github.com/microsoft/presidio/pull/1549/)

내 첫 번째 기여는 문서와 함수 어노테이션을 개선한 것이었다. `DicomImagePiiVerifyEngine` 클래스의 `verify_dicom_instance()` 함수에 잘못된 타입 어노테이션이 있다는 것을 발견했다 - 구체적으로, `ocr_bboxes` 반환값이 실제로는 리스트를 반환하는데 딕셔너리로 어노테이션되어 있었다. 또한 문서에서는 함수가 `verify_image`, `ocr_bboxes`, `analyzer_bboxes`를 반환하도록 업데이트되었음에도 불구하고 여전히 오래된 반환값인 `ocr_results`(OCR 엔진의 `perform_ocr()` 메서드에서 나오는 딕셔너리)를 참조하고 있었다. 따라서 타입 어노테이션과 "Evaluating DICOM de-identification" 문서를 현재 구현을 정확히 반영하도록 업데이트하는 PR을 제출했다.

![내 구현-1]({{ '/assets/img/posts/presidio-my-change-1.png' | relative_url }}){: width="400" height="400" }
_내 구현-1_

![내 구현-2]({{ '/assets/img/posts/presidio-my-change-2.png' | relative_url }}){: width="400" height="400" }
_내 구현-2_

**2. 소유자의 이슈에 따른 코드베이스 업데이트**

PR 링크: [#1653](https://github.com/microsoft/presidio/pull/1653/)

어느 날, Presidio의 소유자 중 한 명이 일부 검증 로직이 누락된 이슈를 만들었다. 따라서 나는 그러한 검증 로직을 포함하도록 코드베이스를 수정하고 PR을 만들었다. 여기서 보여주려는 것은 항상 현재 코드베이스나 문서에서 어떤 이슈를 적극적으로 찾을 필요는 없다는 것이다. `Issues`를 둘러보고 다른 사람들이 제기한 이슈들을 해결해보자.

![소유자 이슈]({{ '/assets/img/posts/presidio-owner-issue.png' | relative_url }}){: width="400" height="400" }
_소유자의 이슈_

> 이슈를 제기한 사람이 해당 이슈에 대한 PR도 함께 올리는 경우가 흔하다.
{: .prompt-warning }

## 결론

이 가이드가 오픈소스 기여에 첫 발을 내딛는 데 도움이 되기를 바란다. 오픈소스 커뮤니티는 항상 새로운 기여자들을 환영하며, 당신의 독특한 관점과 기술이 전 세계의 프로젝트에 가치 있는 변화를 가져올 수 있다. 다음 글에서는 pull request를 올리는 단계별 가이드를 공유하겠다.
