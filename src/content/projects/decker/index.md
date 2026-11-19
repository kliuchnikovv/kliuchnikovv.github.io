---
title: Decker
tagline: A pocket SSH cyberdeck on an ESP32-S3.
description: A DIY cyberdeck firmware for the Waveshare ESP32-S3-RLCD-4.2 — a pocket SSH terminal. Type on a CardKB keyboard, read on a 400×300 reflective monochrome screen, and SSH into your real machine over LibSSH-ESP32 (saved connections, optional mosh). A full 2D VT emulator with an alt-screen buffer and PSRAM scrollback runs less, vim and tmux; a 767-glyph Nerd Font, scroll-wheel navigation, a WiFi / WireGuard / BLE settings UI, and a modular deck_core app architecture round it out, with an ESP32-C6 Zigbee/Thread sniffer companion.
status: active
pubDate: 2026-06-01
repo: https://github.com/kliuchnikovv/decker
tech: [C++, ESP32-S3, PlatformIO, LibSSH]
cover: /covers/decker.svg
tags: [esp32, embedded]
featured: false
order: 8
---

A pocket-sized SSH cyberdeck: DIY firmware for the Waveshare ESP32-S3-RLCD-4.2.
A CardKB keyboard, a 400×300 reflective screen, a full VT terminal emulator and
an SSH client — the deck is a thin client, the work runs on your laptop.
