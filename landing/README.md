<p align="center">
  <br />
  <a href="https://usegdi.com/" target="blank"><img src="https://raw.githubusercontent.com/dht/gdi/main/public/cover.png" 
    width="100%"
   alt="gdi Logo" /></a>
</p>
<p align="center">
<a href="https://usegdi.com" target="_blank">Homepage</a>&nbsp;//&nbsp;
<a href="https://usegdi.com" target="_blank">Youtube Intro</a>&nbsp;//&nbsp;
  <a href="https://usegdi.com/demos/" target="_blank">Demos</a>&nbsp;//&nbsp;
<a href="https://usegdi.com/docs/" target="_blank">Documentation</a>
</p>

Build custom single-screen AI-Apps with `GDI`. Users can tap into the power of different AI models while using complex visual interfaces for variety of purposes. A fusion between existing UI solutions such as 3D engines

              Hybrid AI

Manual [==========X==========] Autonomous AI

Apps offer two distinct modes of operation:

- `Playback mode`
- `Recording mode`

Additional features include:

- `Collaboration`: Easily share and duplicate AI Boards
- `Rich output`: Generate complex 3D, voice & animation outputs

Terminology:

- `AI Board`: a single-screen AI App.

## Installation

```sh
npm install
```

## Running the client

```sh
npm start
```

And open [http://localhost:3000](http://localhost:300)

## Board configuration

A board is defined with a `board schema` which details:

- `Board Info`: name, description, etc.
- `Layout`: the boards layout configuration and elements
- `Adapters`: the default adapters
- `Dependencies`: the required packages needed to run the board
- `Playbacks`: list of setups of different board flavours and presets
- `Siblings`: list of sibling boards

## Adapters

Adapters are a core concept in GDI's ecosystem.

There are 3 types of adapters:

- `Playback Adapter`: loads the board
- `DB Adapter`: saves changes to the board configurations and content
- `Prompt Adapter`: makes calls to AI models

> Each boards must have a `Playback Adapter`. A `Prompt Adapter` is required for completions. `DB Adapter` is required for completions and board editing.

## Core concepts

### C-01: Developer-friendly

GDI is developer-friendly:

- `Schema-based`: Most configurations are YML or Json.
- `Familiar UI`: The UI draws many ideas from `VSCode` with easily configured shortcuts and features such as `Command palette` (Search anything).
- `JSON Mode`: All forms have a "JSON Mode" that allows you to edit their content with a built-in VSCode editor (Monaco) that has auto-complete.
- `Highly Extendable`: anything in the ecosystem can be extended:
  - `Presentation`: Build new widgets
  - `Controllers`: Define custom logic
  - `Models`: Introduce new data entities

### C-02: Collaborative

GDI makes both `sharing boards` and `making public boards yours` an easy intuitive task that can be achieved with a few clicks.

A core direction the project aims to take is having `a global user-based configuration` which can be applied to any public board a user visits and saved on the user's machine. This will allow the user to quickly connect to his personal local/remote database by applying adapters. This, of course, will require trust as client-code of public boards is in the control of the hosted board. The project envisions islands of trusted public boards domains + an `android-like` permission system that will allow the user to adhoc chose which parts of his data he allows the public board to access every time he visits a board.

### C-03: Agnostic

GDI is agnostic to AI models which allows `AI Model Orchestration` on the UI level. The rising trend of `AI Models Orchestration` seen with `Autonomous AI Agents` shows the power of creating a UML flow which combines few models and can send repetitive requests to each one of them as the task in hand needs. It can be viewed as a `dynamic assembly line` where the end product is constantly shaped and extended and intermediate results can be used as a step in the core-process or to determine the next stage of the `assembly line`.

## General links

<!-- -   [AdminUI Demo](https://usegdi.com/admin/pages/home?demo=on) -->

- [Live demos](https://usegdi.com/demos)
