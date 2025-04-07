# FormulaTech Hacks

A monorepository for the website and infrastructure for the FormulaTech Hacks event.

## Overview

The FormulaTech Hacks repository contains:

- Marketing Website
- Hackathon Dashboard
- Deployment Infrastructure

## Quick Start

```bash
# Clone the repository
git clone https://github.com/formulatech/formulatech-hacks.git
cd formulatech-hacks

# Setup Local Development Environment
# Install `mise`
# Installation options: https://mise.jdx.dev/installing-mise.html
$ curl https://mise.run | sh
$ winget install jdx.mise

# Add this to your shell profile if `mise` is not in your PATH
$ export PATH="$HOME/.local/bin:$PATH"

# Activate `mise` in your .profile
# Activation options: https://mise.jdx.dev/installing-mise.html#shells
#
# Run ONE of these:
$ echo 'eval "$(mise activate bash)"' >> ~/.bashrc
$ echo 'eval "$(mise activate zsh)"' >> "${ZDOTDIR-$HOME}/.zshrc"
$ echo 'mise activate fish | source' >> ~/.config/fish/config.fish

# Restart your terminal to refresh your environment

# Open and validate `mise.toml` before trusting (inside repository root)
$ mise trust

# Install global dependencies
$ mise install

# Install development dependencies
$ mise setup
```

## mise Commands

| **Name** | **Description**                            |
|----------|--------------------------------------------|
| setup    | Install dependencies and setup environment |
| check    | Run all code checks                        |
| check:be | Run backend code checks                    |
| check:fe | frontend                                   |
| dev      | Start all development services             |
| dev:be   | Start backend development services         |
| dev:fe   | Start frontend development services        |
| format   | Format files                               |

To run a task:

```bash
$ mise r [task]
```

Copyright © 2025 FormulaTech Team. All rights reserved.
