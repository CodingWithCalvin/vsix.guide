# VS Extension Points - Coverage Audit

## Current Coverage

### Getting Started (6 pages)
- [x] Introduction
- [x] Prerequisites
- [x] First Extension
- [x] Project Structure
- [x] Debugging
- [x] Packaging/Publishing

### Fundamentals (10 pages)
- [x] Overview
- [x] Service Provider
- [x] Packages
- [x] Commands
- [x] Tool Windows
- [x] Editors (basic)
- [x] Options Pages
- [x] Async Services
- [x] TextMate Grammars
- [x] File Icons

### Advanced (7 pages)
- [x] Overview
- [x] MEF Components
- [x] Language Services
- [x] Debugger Integration
- [x] Source Control
- [x] Project Types
- [x] Performance

### Reference (6 pages)
- [x] Services
- [x] Interfaces
- [x] Registry Keys
- [x] VSIX Manifest
- [x] SDK Tools
- [x] Debug GUIDs

---

## MISSING - Editor Extension Points

- [ ] **Completion Providers** - IntelliSense completion sources
- [ ] **Signature Help** - Parameter info tooltips
- [ ] **Quick Info** - Hover tooltips
- [ ] **Light Bulbs / Code Actions** - Suggested actions
- [ ] **Error Tagging** - Squiggles and diagnostics
- [ ] **Brace Matching** - Highlight matching braces
- [ ] **Outlining / Code Folding** - Collapsible regions
- [ ] **Smart Indentation** - Auto-indent behavior
- [ ] **Go To Definition** - F12 navigation
- [ ] **Find All References** - Shift+F12
- [ ] **Peek Definition** - Alt+F12 inline view
- [ ] **CodeLens** - Inline reference counts, test status
- [ ] **Text Adornments** - Decorations on text
- [ ] **Viewport Adornments** - Fixed position decorations
- [ ] **Intra-text Adornments** - Inline UI elements
- [ ] **Editor Margins** - Custom margins (line numbers, etc.)
- [ ] **Selection & Caret** - Track selection changes
- [ ] **Text Structure Navigator** - Word/line navigation
- [ ] **Editor Formatting** - Format document/selection
- [ ] **Undo/Redo** - Custom undo operations

## MISSING - Solution & Projects

- [ ] **Solution Events** - Open, close, build events
- [ ] **Project Events** - Add, remove, rename
- [ ] **Item Templates** - New item wizards
- [ ] **Project Templates** - New project wizards
- [ ] **Project Flavoring** - Extend existing project types
- [ ] **Custom Hierarchy Nodes** - Custom items in Solution Explorer
- [ ] **Solution Folders** - Organize projects
- [ ] **Multi-Targeting** - Target multiple frameworks
- [ ] **Linked Files** - Shared files across projects
- [ ] **Project Properties** - Custom property pages

## MISSING - Menus & Commands

- [ ] **Dynamic Menus** - Runtime-generated menu items
- [ ] **Context Menus** - All context menu locations
- [ ] **Toolbar Customization** - Custom toolbars
- [ ] **Command Filters** - Intercept commands
- [ ] **Keyboard Shortcuts** - Key bindings deep dive
- [ ] **Command Routing** - Command target chain
- [ ] **Priority & Placement** - Menu item ordering

## MISSING - UI Components

- [ ] **Custom Dialogs** - Modal dialogs
- [ ] **Wizards** - Multi-step wizards
- [ ] **Progress Indication** - Progress bars, wait dialogs
- [ ] **Notifications / InfoBars** - Non-modal messages
- [ ] **Status Bar** - Status bar integration
- [ ] **Output Window** - Custom output panes
- [ ] **Error List** - Add errors, warnings, messages
- [ ] **Task List** - Custom tasks and TODO comments
- [ ] **Toolbox** - Add toolbox items
- [ ] **Properties Window** - Property descriptors
- [ ] **Document Well** - Tab customization
- [ ] **Window Layouts** - Save/restore layouts
- [ ] **Start Window** - Customize start experience

## MISSING - Build & Compile

- [ ] **Custom Build Tasks** - MSBuild tasks
- [ ] **Build Events** - Pre/post build hooks
- [ ] **Build Output** - Custom build loggers
- [ ] **IntelliSense Build** - Design-time builds
- [ ] **Code Generators** - T4, Source Generators

## MISSING - Debugging (Deep Dive)

- [ ] **Debug Visualizers** - Custom data visualizers (expand existing)
- [ ] **Expression Evaluators** - Custom EE
- [ ] **Breakpoint Customization** - Custom breakpoint types
- [ ] **Data Tips** - Hover debugging info
- [ ] **Watch Window** - Custom evaluators
- [ ] **Call Stack** - Custom frames
- [ ] **Modules Window** - Module info
- [ ] **Debug Toolbar** - Debug commands

## MISSING - Code Analysis

- [ ] **Roslyn Analyzers** - Diagnostic analyzers
- [ ] **Code Fixes** - Automated fixes
- [ ] **Refactorings** - Code refactoring providers
- [ ] **Live Analysis** - Real-time diagnostics
- [ ] **Suppressions** - Suppress diagnostics

## MISSING - Testing

- [ ] **Test Adapters** - Custom test frameworks
- [ ] **Test Explorer** - Integration with Test Explorer
- [ ] **Code Coverage** - Coverage providers
- [ ] **Live Unit Testing** - LUT integration

## MISSING - Designer Integration

- [ ] **WPF/XAML Designer** - Designer extensibility
- [ ] **WinForms Designer** - Component designers
- [ ] **Custom Designers** - File-specific designers
- [ ] **Property Window** - Custom type editors
- [ ] **Toolbox Integration** - Designer toolbox

## MISSING - Web & Cloud

- [ ] **Web Browser Tool Window** - Embedded browser
- [ ] **Connected Services** - Service references
- [ ] **Publish Profiles** - Deployment
- [ ] **Azure Integration** - Cloud services

## MISSING - Fonts, Colors & Themes

- [ ] **Custom Classifications** - Define new text colors
- [ ] **Font & Color Defaults** - Set default colors
- [ ] **Theme Detection** - Respond to theme changes
- [ ] **High Contrast** - Accessibility support

## MISSING - Packaging & Distribution

- [ ] **VSIX Signing** - Code signing
- [ ] **Extension Dependencies** - Depend on other extensions
- [ ] **Marketplace Categories** - Publishing details
- [ ] **Extension Packs** - Bundle extensions
- [ ] **Private Galleries** - Enterprise distribution
- [ ] **Auto-Update** - Update mechanisms

## MISSING - Miscellaneous

- [ ] **Background Services** - Long-running services
- [ ] **File Change Tracking** - Monitor file changes
- [ ] **Clipboard** - Clipboard integration
- [ ] **Drag and Drop** - DnD in editors/windows
- [ ] **Find & Replace** - Custom find scopes
- [ ] **Bookmarks** - Bookmark integration
- [ ] **Navigate To** - Ctrl+, integration
- [ ] **Call Hierarchy** - Call hierarchy window
- [ ] **Object Browser** - Type browsing
- [ ] **Class View** - Class hierarchy
- [ ] **Code Definition Window** - Definition tracking
- [ ] **Document Outline** - Document structure
- [ ] **Snippet Manager** - Code snippets
- [ ] **Help Integration** - F1 help context
- [ ] **Feedback & Telemetry** - Usage tracking
- [ ] **Licensing** - Extension licensing

---

## Suggested New Structure

### Getting Started (keep as-is, 6 pages)

### Fundamentals (expand to ~20 pages)
- Core: Service Provider, Packages, Commands, Tool Windows, Options Pages, Async Services
- Editor Basics: TextMate Grammars, File Icons, Editor Overview
- UI: Dialogs, Notifications, Status Bar, Output Window, Error List

### Editor Extensions (NEW section, ~15 pages)
- Completion, Signature Help, Quick Info
- Code Actions, Error Tagging, Brace Matching
- Outlining, Go To Definition, Find References
- CodeLens, Adornments, Margins

### Project System (NEW section, ~8 pages)
- Solution Events, Project Events
- Templates, Flavoring, Custom Nodes
- Build Integration

### Code Analysis (NEW section, ~5 pages)
- Roslyn Analyzers, Code Fixes, Refactorings

### Testing (NEW section, ~3 pages)
- Test Adapters, Test Explorer

### Debugging (expand, ~8 pages)
- Visualizers, Expression Evaluators, Breakpoints

### Theming & UI (NEW section, ~5 pages)
- Fonts & Colors, Themes, High Contrast

### Advanced (keep/expand, ~10 pages)
- Language Services, Source Control, Project Types, Performance
- Designer Integration, Web Integration

### Reference (expand, ~10 pages)
- Services, Interfaces, Registry, Manifest, GUIDs
- Context Menu IDs, Command IDs, UI Contexts

---

## Priority Order

1. Editor Extensions (highest demand)
2. Code Analysis (Roslyn)
3. Project System
4. UI Components
5. Build Integration
6. Testing
7. Theming
8. Everything else
