---
title: GitHub에서 Pull Request (PR) 만드는 방법
description: Pull Request (PR) 만드는 방법을 배우고 직접 시도해보세요
date: 2025-08-03 09:00:00 +1000
categories:
tags:
pin: true
math: false
mermaid: true
image:
  path: assets/img/posts/presidio-pr.png
  alt: Microsoft Presidio 저장소에서 merge된 내 Pull Request
lang: kr
slug: how-to-create-a-pull-request-on-github-kr
---

## 소개

---

이전 [글](https://siwoo-jung.github.io/posts/how-to-contribute-to-open-source-projects-kr)에서 Microsoft의 오픈소스 프로젝트인 Presidio에 기여한 경험을 공유했다. Pull Request (PR) 만드는 것에 익숙하지 않은 분들을 위해 이 글에서는 GitHub에서 PR을 만드는 단계별 가이드를 제공하겠다.

Pull Request (PR)는 코드베이스에 변경사항을 제안하는 방법이다. "pull" request라고 불리는 이유는 프로젝트 관리자들에게 당신의 변경사항을 그들의 저장소로 "pull"해달라고 요청하기 때문이다. PR은 협업 개발의 핵심이며 오픈소스 프로젝트에 기여하는 표준적인 방법이다.

## 사전 준비사항

---

PR을 만들기 전에 다음 사항들을 확인하세요:

1. **컴퓨터에 Git 설치**
   - [git-scm.com](https://git-scm.com/downloads)에서 Git 다운로드
   - 터미널에서 `git --version`을 실행하여 설치 확인

2. **GitHub 계정**
   - [github.com](https://github.com)에서 가입
   - 보안을 위해 2단계 인증(2FA) 설정
   - 로컬에서 Git 자격 증명 설정:
     ```bash
     git config --global user.name "Your Name"
     git config --global user.email "your.email@example.com"
     ```

3. **기본 Git 지식**
   - 기본 Git 명령어 이해 (`clone`, `add`, `commit`, `push`)
   - 브랜치 개념에 대한 이해
   - 저장소가 무엇인지 알기

4. **코드 에디터**
   - Visual Studio Code, Sublime Text 또는 선호하는 에디터
   - 작업할 프로그래밍 언어에 대한 기본 이해

## 배울 내용

---

이 튜토리얼을 따라하면 다음을 배울 수 있습니다:
- 저장소 포크하기
- 로컬 컴퓨터에 저장소 클론하기
- 파일 변경하기
- 변경사항 커밋 및 푸시하기
- Pull Request 만들기
- Pull Request 워크플로우 이해하기

## 참여 방법

### 1단계: 저장소 fork하기

1. 내 튜토리얼 [저장소](https://github.com/siwoo-jung/pull-request-tutorial)로 이동
2. 저장소 페이지 우측 상단으로 이동
3. **Fork** 버튼 클릭
4. **Create fork**를 클릭하여 이 저장소를 당신의 GitHub 계정으로 포크

   ![Fork 버튼](./assets/img/posts/pr-tutorial-1.png)
   ![Create Fork 버튼](./assets/img/posts/pr-tutorial-2.png)

### 2단계: 저장소 URL 가져오기

1. **<> Code** 버튼(녹색 버튼) 클릭
2. 복사 아이콘을 클릭하여 저장소 URL 복사

   ![Code 버튼](./assets/img/posts/pr-tutorial-3.png)

### 3단계: 저장소 Clone하기

터미널을 열고 다음 명령어를 실행하세요. **`YOUR-USERNAME`을 실제 GitHub 사용자명으로 바꾸거나** 2단계에서 복사한 URL을 사용하세요.

```bash
git clone https://github.com/YOUR-USERNAME/pull-request-tutorial.git
cd pull-request-tutorial
```

### 4단계: 변경사항 만들기

1. 선호하는 텍스트 에디터에서 `favorite_number.py` 파일 열기
2. `favorite_number`와 `favorite_color` 변수를 실제로 좋아하는 것으로 변경
3. 파일 저장

   ![좋아하는 숫자와 색상 편집](./assets/img/posts/pr-tutorial-4.png)

### 5단계: 변경사항 커밋 및 푸시하기

터미널에서 다음 명령어 실행:

```bash
git add favorite_number.py
git commit -m "Update favorite number and color"
git push origin main
```

### 6단계: Pull Request 만들기

1. GitHub에서 fork한 저장소로 이동
2. **Contribute** 버튼 클릭
3. **Open pull request** 클릭

   ![Contribute](./assets/img/posts/pr-tutorial-5.png)

### 7단계: Pull Request 제출하기

1. Pull Request 페이지에서 변경사항 검토
2. **Create pull request** 클릭

   ![Create PR](./assets/img/posts/pr-tutorial-6.png)

### 8단계: 리뷰 대기하기

Pull Request를 제출하면 제가 검토하고 메인 브랜치에 merge할 것입니다!

![Merged](./assets/img/posts/pr-tutorial-7.png)

---

## 결론

---

실제 오픈소스 프로젝트에서 PR을 만들 때도 기본 과정은 동일하다. 하지만 한 가지 주의할 점은 `prettier` 같은 자동 린터를 방지하는 것이다. 이런 도구들은 파일을 저장할 때마다 자동으로 코드를 포맷팅하는데, 이는 예상하지 못한 상당한 변경사항(차이점)을 파일에 만들 수 있다. 