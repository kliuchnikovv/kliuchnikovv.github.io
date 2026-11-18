---
title: Decker
tagline: A DIY ESP32 handheld with a modular app platform.
description: A home-built ESP32 handheld deck — a C++ / ESP-IDF firmware with a shared core (screen, keyboard, NVS, BLE, audio) and a launcher, plus modular apps that each live in their own repo and consume only the core's public API — an SSH client (libssh with a VT100-lite terminal on a B/W panel), a BLE-keyboard bridge, voice input (ES7210 mics to whisper.cpp), a terminal, and a packet sniffer.
status: active
pubDate: 2026-06-01
repo: https://github.com/kliuchnikovv/decker
tech: [C++, ESP-IDF, FreeRTOS, BLE]
tags: [esp32, embedded]
featured: false
order: 8
---

A home-built ESP32 handheld "deck": a C++ firmware with a shared core and a
launcher, plus modular apps (SSH, BLE keyboard, voice input, terminal, sniffer)
that each live in their own repo and use only the core's public API.
