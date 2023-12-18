### Hexlet tests and linter status:
[![Actions Status](https://github.com/sigilisd/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/sigilisd/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/418e8fc5cd622487d206/maintainability)](https://codeclimate.com/github/sigilisd/frontend-project-44/maintainability)

# Описание 

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.
# Игры разума

Команды, с помощью которых вызываются игры:

```bash
brain-even
braic-calc
brain-gcd
brain-progression
brain-prime
```

## Установка

```
Перед установкой проекта проверьте наличие установленных Node.js, npm!
```

Для запуска имеющихся игр необходимо предварительно установить данный проект:

1. Склонируйте репозиторий использую следующую консольную команду:

```bash
https://github.com/sigilisd/frontend-project-44.git
```

2. Осуществите установку проекта:

```bash
make install
```

3. Осуществите symlink проекта:

```bash
make link
```

4. Запустите любую из игр посредством команд указанных выше

# Игры

#### Brain Even (определение четного числа)

Команда для запуска: `brain-even`

[![asciicast](https://asciinema.org/a/9yGhJvHZsZ0MOqfxxhrVk0tpA.svg)](https://asciinema.org/a/9yGhJvHZsZ0MOqfxxhrVk0tpA)

#### Brain Calc (калькулятор)

Команда для запуска: `brain-calc`

[![asciicast](https://asciinema.org/a/iFsf1FcrlisHDv6ThEcmJdGaJ.svg)](https://asciinema.org/a/iFsf1FcrlisHDv6ThEcmJdGaJ)

#### Brain Gcd (НОД)

Команда для запуска: `brain-gcd`

[![asciicast](https://asciinema.org/a/EIKBY8p5nEvFL1nUQNfcgEa7q.svg)](https://asciinema.org/a/EIKBY8p5nEvFL1nUQNfcgEa7q)

#### Brain Progression (Арифметическая прогрессия)

Команда для запуска: `brain-progression`

[![asciicast](https://asciinema.org/a/2Z8YTm8NrkSlJCjxfShavhKDZ.svg)](https://asciinema.org/a/2Z8YTm8NrkSlJCjxfShavhKDZ)

#### Brain Prime (Простое ли число?)

Команда для запуска: `brain-prime`

[![asciicast](https://asciinema.org/a/zBNpKG9kKkQkOCIwtkeKqa3aI.svg)](https://asciinema.org/a/zBNpKG9kKkQkOCIwtkeKqa3aI)

## Структура проекта

```bash
.
├── .eslintrc.yml
├── .github
│   └── workflows
│       ├── README.md
│       └── hexlet-check.yml
├── .gitignore
├── Makefile
├── package-lock.json
├── package.json
├── README.md
├── bin
│   ├── brain-calc.js
│   ├── brain-even.js
│   ├── brain-games.js
│   ├── brain-gcd.js
│   ├── brain-prime.js
│   └── brain-progression.js
└── src
    ├── brain-calc.js
    ├── brain-even.js
    ├── brain-gcd.js
    ├── brain-prime.js
    ├── brain-progression.js
    ├── cli.js
    ├── index.js
    └── utils.js
```


## Дополнительные команды

Полезные команды, которые доступны для использования в проекте.

<dl>
    <dt><code>make publish</code></dt>
    <dd>Публикация проекта с флагом <code>--dry-run</code></dd>
    <dt><code>make lint</code></dt>
    <dd>Проверка кода проекта линтером ESLint.</dd>
</dl>
