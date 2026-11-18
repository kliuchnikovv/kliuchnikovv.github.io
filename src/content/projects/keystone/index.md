---
title: keystone
tagline: A local-first smart-home hub on bare ESP32.
description: A smart-home hub that reimplements the core of Home Assistant — event bus, entity registry with a state machine, and a rule engine — on bare ESP32 (C++ / ESP-IDF). A brain chip runs the portable core; radio co-processors (Zigbee, Thread / Matter) translate devices over a UART wire protocol, with an optional Go relay for remote access and an Expo control app.
status: active
pubDate: 2026-09-01
repo: https://github.com/kliuchnikovv/keystone
tech: [C++, ESP-IDF, Go, Matter, Zigbee]
tags: [esp32, go]
featured: true
order: 1
---

A local-first smart-home hub that reimplements the core of Home Assistant on
bare ESP32: a portable brain chip plus radio co-processors, with a Go
remote-access relay and an Expo control app.
