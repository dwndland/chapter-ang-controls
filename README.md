# Chapter Ang Controls

This project is a library for Angular controls targeting WPF/XAML developers.

## Installation

To install the library, use npm:

```bash
npm install chapter-ang-controls
```

## Usage

### DockPanel

The `DockPanel` arranges its child elements by docking them to the top, bottom, left, or right edges of the panel. The last child fills the remaining space.

```html
<dock-panel style="border: 1px solid black; height: 300px;">
    <div #dockItem dock="top" style="padding: 10px; background-color: lightblue;">Top</div>
    <div #dockItem dock="bottom" style="padding: 10px; background-color: lightgreen;">Bottom</div>
    <div #dockItem dock="left" style="padding: 10px; background-color: lightcoral;">Left</div>
    <div #dockItem dock="right" style="padding: 10px; background-color: lightgoldenrodyellow;">Right</div>
    <div #dockItem style="padding: 10px; background-color: lightgray;">Center</div>
</dock-panel>
```

---

### StackPanel

The `StackPanel` arranges its child elements in a single line, either horizontally or vertically, based on the `orientation` property.

```html
<!-- Vertical StackPanel (default) -->
<stack-panel style="border: 1px solid black; padding: 10px;">
    <div style="background-color: lightblue; padding: 10px;">Item 1</div>
    <div style="background-color: lightgreen; padding: 10px;">Item 2</div>
    <div style="background-color: lightcoral; padding: 10px;">Item 3</div>
</stack-panel>

<!-- Horizontal StackPanel -->
<stack-panel [orientation]="'Horizontal'" style="border: 1px solid black; padding: 10px;">
    <div style="background-color: lightblue; padding: 10px;">Item 1</div>
    <div style="background-color: lightgreen; padding: 10px;">Item 2</div>
    <div style="background-color: lightcoral; padding: 10px;">Item 3</div>
</stack-panel>
```

---

### WrapPanel

The `WrapPanel` arranges its child elements in rows or columns that wrap when there is insufficient space.

```html
<!-- Horizontal WrapPanel (default) -->
<wrap-panel style="border: 1px solid black; padding: 10px;">
    <div style="background-color: lightblue; width: 100px; height: 50px;">Item 1</div>
    <div style="background-color: lightgreen; width: 100px; height: 50px;">Item 2</div>
    <div style="background-color: lightcoral; width: 100px; height: 50px;">Item 3</div>
    <div style="background-color: lightgoldenrodyellow; width: 100px; height: 50px;">Item 4</div>
</wrap-panel>

<!-- Vertical WrapPanel -->
<wrap-panel [orientation]="'Vertical'" style="border: 1px solid black; padding: 10px; height: 200px;">
    <div style="background-color: lightblue; width: 100px; height: 50px;">Item 1</div>
    <div style="background-color: lightgreen; width: 100px; height: 50px;">Item 2</div>
    <div style="background-color: lightcoral; width: 100px; height: 50px;">Item 3</div>
    <div style="background-color: lightgoldenrodyellow; width: 100px; height: 50px;">Item 4</div>
</wrap-panel>
```

---

### UniformGrid

The `UniformGrid` arranges its child elements in a grid with equal-sized rows and columns.

```html
<uniform-grid [rows]="2" [columns]="3" style="border: 1px solid black; padding: 10px;">
    <div style="background-color: lightblue; padding: 10px;">Item 1</div>
    <div style="background-color: lightgreen; padding: 10px;">Item 2</div>
    <div style="background-color: lightcoral; padding: 10px;">Item 3</div>
    <div style="background-color: lightgoldenrodyellow; padding: 10px;">Item 4</div>
    <div style="background-color: lightgray; padding: 10px;">Item 5</div>
    <div style="background-color: lightpink; padding: 10px;">Item 6</div>
</uniform-grid>
```

---

## License

This project is licensed under the MIT License.