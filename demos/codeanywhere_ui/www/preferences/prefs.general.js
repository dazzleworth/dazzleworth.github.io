export default {

  "workspace": {
    // codeanywhere visual theme
    // currently available: "monokai", "dark", "white"
    "theme": "monokai",

    // editor syntax highlighting
    // currently available: "monokai", "dark", "white", "eclipse", "ambiance", "blackboard", "pastel-on-dark", "seti"
    "color_scheme": "monokai",
    
    // use sound notifications (for example on file save)
    "sounds": true,
    
    // whether to show info on how to use copy/paste in SSH terminal (for windows)
    "windows_copy_paste_info": true
  },
 
  "fileExplorer": {
    // should file explorer be visible
    "visible": true,

    // show checkboxes for selecting files in file explorer
    "checkboxes": false,

    // open files and folders with a double click
    "dblclick": false,

    // show hidden files and folders
    "show_hidden_files": false
  },

  "editor": {
    // auto-close brackets and quotes while typing. By default, it'll auto-close ()[]{}''""
    "auto_close_brackets": true,

    // auto-close html tags
    "auto_close_tags": true,

    // show code completions while typing 
    "autocomplete": true,

    // whether to periodically save unsaved opened tabs 
    "autosave": false,

    // auto detect indentation on file open (spaces or tabs)
    "detect_indentation": true,

    // open file with encoding
    "default_encoding": "UTF-8",

    // whether to expand emmet abbreviation when indenting (usually when tab key is pressed)
    "emmet_expand_abbreviation_on_indent": true,

    // show fold icons in gutter
    "fold_gutter": true,

    // editor font size (if set to false, theme default will be used)
    "font_size": false,

    // editor font family (if set to false, theme default will be used)
    // available options: 'Anonymous Pro', 'Droid Sans Mono', 'Inconsolata', 'Raleway', 'PT Mono', 'Source Code Pro', 'Share Tech Mono', 'Ubuntu Mono'
    "font_family": "Inconsolata",

    // the period of inactivity (in milliseconds) that will cause a new history event to be started when typing or deleting
    "history_event_delay": 250,

    // highlights occurrences of the selected text
    "highlight_selection_matches": true,

    // highlight active line in gutter
    "hover_active_line": true,

    // default indentation (can be ignored if detect_indetation is enabled)
    "indent_with_tabs": false,

    // show line numbers in gutter
    "line_numbers": true,

    // show errors and warnings in gutter
    "lint": {
      "value": true,
      "mode": ["JavaScript", "JSON"]
    },

    // when enabled, causes matching brackets to be highlighted whenever the cursor is next to them
    "match_brackets": true,

    // when enabled, will cause the tags around the cursor to be highlighted
    "match_tags": {
      "value": true
    },

    // whether to show MiniMap in editor
    "minimap": true,

    // open editor in read-only mode
    "read_only": false,

    // editor scroll style
    // available options: "overlay" and "native"
    "scrollbar_style": "overlay",

    // the number of spaces a tab is considered equal to
    "tab_size": 2,

    // the maximum number of undo levels that the editor stores
    "undo_dept": 1000,

    // whether to scroll or wrap long lines
    "wrap_lines": false
  }

}