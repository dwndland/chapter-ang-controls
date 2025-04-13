# Chapter Ang Controls

chapter-ang-controls is a library that provides a collection of Angular controls designed for WPF and XAML developers, offering familiar patterns and functionality from the XAML ecosystem.

## Installation

To install the library, use npm:

```bash
npm install chapter-ang-controls
```

## Usage

### DockPanel

The `DockPanel` arranges its child elements by docking them to the top, bottom, left, or right edges of the panel. The last child fills the remaining space.

```html
<dockPanel style="border: 1px solid black; height: 300px;">
    <div #dockItem dock="top" style="padding: 10px; background-color: lightblue;">Top</div>
    <div #dockItem dock="bottom" style="padding: 10px; background-color: lightgreen;">Bottom</div>
    <div #dockItem dock="left" style="padding: 10px; background-color: lightcoral;">Left</div>
    <div #dockItem dock="right" style="padding: 10px; background-color: lightgoldenrodyellow;">Right</div>
    <div #dockItem style="padding: 10px; background-color: lightgray;">Center</div>
</dockPanel>
```

---

### Grid

The `Grid` component allows you to arrange child elements in a flexible grid layout. You can specify the column and row for each child, as well as how many columns or rows the child spans.

```html
<grid>
    <columnDefinitions>
        <columnDefinition width="1fr"></columnDefinition>
        <columnDefinition width="1fr"></columnDefinition>
        <columnDefinition width="1fr"></columnDefinition>
    </columnDefinitions>
    <rowDefinitions>
        <rowDefinition height="auto"></rowDefinition>
        <rowDefinition height="auto"></rowDefinition>
        <rowDefinition height="auto"></rowDefinition>
        <rowDefinition height="auto"></rowDefinition>
    </rowDefinitions>
    <div [gridColumn]="0" [gridRow]="0" style="background: #474747">Column 1 Row 1</div>
    <div [gridColumn]="1" [gridRow]="0" style="background: #545454">Column 2 Row 1</div>
    <div [gridColumn]="2" [gridRow]="0" style="background: #616161">Column 3 Row 1</div>

    <div [gridColumn]="0" [gridRow]="1" style="background: #6e6e6e">Column 1 Row 2</div>
    <div [gridColumn]="1" [gridRow]="1" style="background: #7b7b7b">Column 2 Row 2</div>
    <div [gridColumn]="2" [gridRow]="1" style="background: #888888">Column 3 Row 2</div>

    <div [gridColumn]="0" [gridRow]="2" [gridColumnSpan]="2" style="background: #959595">Column 1 ColumnSpan 2 Row 3</div>
    <div [gridColumn]="1" [gridRow]="3" [gridColumnSpan]="2" style="background: #a2a2a2">Column 2 ColumnSpan 2 Row 4</div>
</grid>
```

---

### StackPanel

The `StackPanel` arranges its child elements in a single line, either horizontally or vertically, based on the `orientation` property.

```html
<!-- Vertical StackPanel (default) -->
<stackPanel style="border: 1px solid black; padding: 10px;">
    <div style="background-color: lightblue; padding: 10px;">Item 1</div>
    <div style="background-color: lightgreen; padding: 10px;">Item 2</div>
    <div style="background-color: lightcoral; padding: 10px;">Item 3</div>
</stackPanel>

<!-- Horizontal StackPanel -->
<stackPanel [orientation]="'Horizontal'" style="border: 1px solid black; padding: 10px;">
    <div style="background-color: lightblue; padding: 10px;">Item 1</div>
    <div style="background-color: lightgreen; padding: 10px;">Item 2</div>
    <div style="background-color: lightcoral; padding: 10px;">Item 3</div>
</stackPanel>
```

---

### UniformGrid

The `UniformGrid` arranges its child elements in a grid with equal-sized rows and columns.

```html
<uniformGrid [rows]="2" [columns]="3" style="border: 1px solid black; padding: 10px;">
    <div style="background-color: lightblue; padding: 10px;">Item 1</div>
    <div style="background-color: lightgreen; padding: 10px;">Item 2</div>
    <div style="background-color: lightcoral; padding: 10px;">Item 3</div>
    <div style="background-color: lightgoldenrodyellow; padding: 10px;">Item 4</div>
    <div style="background-color: lightgray; padding: 10px;">Item 5</div>
    <div style="background-color: lightpink; padding: 10px;">Item 6</div>
</uniformGrid>
```

---

### WrapPanel

The `WrapPanel` arranges its child elements in rows or columns that wrap when there is insufficient space.

```html
<!-- Horizontal WrapPanel (default) -->
<wrapPanel style="border: 1px solid black; padding: 10px;">
    <div style="background-color: lightblue; width: 100px; height: 50px;">Item 1</div>
    <div style="background-color: lightgreen; width: 100px; height: 50px;">Item 2</div>
    <div style="background-color: lightcoral; width: 100px; height: 50px;">Item 3</div>
    <div style="background-color: lightgoldenrodyellow; width: 100px; height: 50px;">Item 4</div>
</wrapPanel>

<!-- Vertical WrapPanel -->
<wrapPanel [orientation]="'Vertical'" style="border: 1px solid black; padding: 10px; height: 200px;">
    <div style="background-color: lightblue; width: 100px; height: 50px;">Item 1</div>
    <div style="background-color: lightgreen; width: 100px; height: 50px;">Item 2</div>
    <div style="background-color: lightcoral; width: 100px; height: 50px;">Item 3</div>
    <div style="background-color: lightgoldenrodyellow; width: 100px; height: 50px;">Item 4</div>
</wrapPanel>
```

---

## License

This project is licensed under the MIT License.