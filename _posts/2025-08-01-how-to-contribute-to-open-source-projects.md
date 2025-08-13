---
title: Contribute to Open Source Projects: Beginner's Guide
description: My trials and errors in contributing to Microsoft's open source projects.
date: 2025-07-31 23:22:00 +1000
categories:
tags:
pin: true
math: false
mermaid: true
image:
  path: assets/img/posts/presidio-contribution.png
  alt: My contribution to Microsoft's Presidio
lang: en
# slug: how-to-contribute-to-open-source-projects
---

## Introduction

---

Personally, I believe the art of the software industry lies in the nature of its open source ecosystem. It allows anyone to view, use, modify, and distribute software code. This collaborative approach to software development has resulted in popular technologies, such as Linux OS and Python.

To enhance my programming knowledge and profile, I have actively contributed to Microsoft's [Presidio](https://github.com/microsoft/presidio) project, which I'll detail in this post.

## Why contribute to an open source project

---

There are several benefits to contributing to an open source project, especially as a student or a junior software engineer:

- It provides real-world experience, such as code review processes and collaborative development.

- It offers great learning opportunities through reading and understanding others' code and engaging with large-scale software architecture.

- It is good for your career, as contributing to an open source project demonstrates your coding abilities and teamwork skills to potential employers. It will make your resume stand out.

## How to find an open source project to contribute

---

The first issue you will most likely face is finding an open source project to contribute to. 

**1. A library or module that you are already familiar with**

If you know a library or module that you regularly use, you are already quite familiar with the codebase and it is easier to find an issue from that open source project.

**2. Good-first-issue label**

![Good First Issue Label]({{ '/assets/img/posts/presidio-good-first-issue.png' | relative_url }}){: width="400" height="400" }
_Good First Issue label_

You can also search for a `good first issue` label from `Issues`. Those `good first issue` labels are generally assigned by the owners because they believe those issues are relatively light and can potentially be resolved by newbies.

> There are some websites out there that show a list of `good first issue`s.
{: .prompt-info }

**3. Documentation**

Although improving codebase would be considered meaningful from a job perspective, you can still step into open source contribution by improving documentation. Go through official docs and find some typos or grammar/syntax errors. If you know more than one language, you can also contribute by translating docs.

## How to contribute to an open source project

Contributing to open source projects is not just about writing code, and you can contribute by improving documentation, reporting bugs or suggesting new features. However, an open source contribution is generally considered when you create a PR (pull request) and get it merged to the main/master branch. Therefore, the most important knowledge is **Pull Request**.

This [post](https://siwoo-jung.github.io/posts/how-to-create-a-pull-request-on-github/) provides a step-by-step guide on how to create a simple pull request with a hands-on tutorial.

## What have I contributed

In this post, I will share two sample contributions I made to Microsoft's Presidio.

**1. Documentation and function annotation improvement**

PR links: 
[#1547](https://github.com/microsoft/presidio/pull/1547/) and
[#1549](https://github.com/microsoft/presidio/pull/1549/)

My first contribution was improving documentation and function annotations. I noticed that the `verify_dicom_instance()` function in the `DicomImagePiiVerifyEngine` class had incorrect type annotations - specifically, the `ocr_bboxes` return value was annotated as a dictionary when it actually returns a list. Additionally, the documentation still referenced an outdated return value `ocr_results` (a dictionary from the OCR engine's `perform_ocr()` method) even though the function had been updated to return `verify_image`, `ocr_bboxes`, and `analyzer_bboxes`. Therefore, I submitted a PR to update both the type annotations and the "Evaluating DICOM de-identification" documentation to accurately reflect the current implementation.

![My Implementation-1]({{ '/assets/img/posts/presidio-my-change-1.png' | relative_url }}){: width="400" height="400" }
_My implementation-1_

![My Implementation-2]({{ '/assets/img/posts/presidio-my-change-2.png' | relative_url }}){: width="400" height="400" }
_My implementation-2_

**2. Update codebase as per the owner's issue**

PR links: [#1653](https://github.com/microsoft/presidio/pull/1653/)

One day, one of Presidio's owners created an issue that was missing some validation logic. Therefore, I revised the codebase to include such validation logic and created a PR. What I am trying to show here is that you do not always have to proactively find some issues in the current codebase or documentation. Browse `Issues` and try to resolve those issues that are raised by others.

![owner-issue]({{ '/assets/img/posts/presidio-owner-issue.png' | relative_url }}){: width="400" height="400" }
_Owner's issue_

> It is common that an issuer also raises a PR request for that issue.
{: .prompt-warning }

## Conclusion

I hope this guide helps you take your first steps into open source contribution. The open source community is always welcoming new contributors, and your unique perspective and skills could make a valuable difference to projects around the world. Refer to 
this [post](https://siwoo-jung.github.io/posts/how-to-create-a-pull-request-on-github/) for a step-by-step guide on creating a simple pull request with a hands-on tutorial.
