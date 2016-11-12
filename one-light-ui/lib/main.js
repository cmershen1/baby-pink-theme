(function() {
  var root, setFontSize, setLayoutMode, setTabSizing, unsetFontSize, unsetLayoutMode, unsetTabSizing;

  root = document.documentElement;

  module.exports = {
    activate: function(state) {
      atom.config.observe('one-light-ui.fontSize', function(value) {
        return setFontSize(value);
      });
      atom.config.observe('one-light-ui.layoutMode', function(value) {
        return setLayoutMode(value);
      });
      return atom.config.observe('one-light-ui.tabSizing', function(value) {
        return setTabSizing(value);
      });
    },
    deactivate: function() {
      unsetFontSize();
      unsetLayoutMode();
      return unsetTabSizing();
    }
  };

  setFontSize = function(currentFontSize) {
    if (Number.isInteger(currentFontSize)) {
      return root.style.fontSize = currentFontSize + "px";
    } else if (currentFontSize === 'Auto') {
      return unsetFontSize();
    }
  };

  unsetFontSize = function() {
    return root.style.fontSize = '';
  };

  setLayoutMode = function(layoutMode) {
    return root.setAttribute('theme-one-light-ui-layoutmode', layoutMode.toLowerCase());
  };

  unsetLayoutMode = function() {
    return root.removeAttribute('theme-one-light-ui-layoutmode');
  };

  setTabSizing = function(tabSizing) {
    return root.setAttribute('theme-one-light-ui-tabsizing', tabSizing.toLowerCase());
  };

  unsetTabSizing = function() {
    return root.removeAttribute('theme-one-light-ui-tabsizing');
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9DOi9wcm9qZWN0cy9hdG9tL291dC9hcHAvbm9kZV9tb2R1bGVzL29uZS1saWdodC11aS9saWIvbWFpbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLElBQUEsR0FBTyxRQUFRLENBQUM7O0VBRWhCLE1BQU0sQ0FBQyxPQUFQLEdBQ0U7SUFBQSxRQUFBLEVBQVUsU0FBQyxLQUFEO01BQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFaLENBQW9CLHVCQUFwQixFQUE2QyxTQUFDLEtBQUQ7ZUFDM0MsV0FBQSxDQUFZLEtBQVo7TUFEMkMsQ0FBN0M7TUFHQSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQVosQ0FBb0IseUJBQXBCLEVBQStDLFNBQUMsS0FBRDtlQUM3QyxhQUFBLENBQWMsS0FBZDtNQUQ2QyxDQUEvQzthQUdBLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBWixDQUFvQix3QkFBcEIsRUFBOEMsU0FBQyxLQUFEO2VBQzVDLFlBQUEsQ0FBYSxLQUFiO01BRDRDLENBQTlDO0lBUFEsQ0FBVjtJQVVBLFVBQUEsRUFBWSxTQUFBO01BQ1YsYUFBQSxDQUFBO01BQ0EsZUFBQSxDQUFBO2FBQ0EsY0FBQSxDQUFBO0lBSFUsQ0FWWjs7O0VBZ0JGLFdBQUEsR0FBYyxTQUFDLGVBQUQ7SUFDWixJQUFHLE1BQU0sQ0FBQyxTQUFQLENBQWlCLGVBQWpCLENBQUg7YUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVgsR0FBeUIsZUFBRCxHQUFpQixLQUQzQztLQUFBLE1BRUssSUFBRyxlQUFBLEtBQW1CLE1BQXRCO2FBQ0gsYUFBQSxDQUFBLEVBREc7O0VBSE87O0VBTWQsYUFBQSxHQUFnQixTQUFBO1dBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFYLEdBQXNCO0VBRFI7O0VBSWhCLGFBQUEsR0FBZ0IsU0FBQyxVQUFEO1dBQ2QsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsK0JBQWxCLEVBQW1ELFVBQVUsQ0FBQyxXQUFYLENBQUEsQ0FBbkQ7RUFEYzs7RUFHaEIsZUFBQSxHQUFrQixTQUFBO1dBQ2hCLElBQUksQ0FBQyxlQUFMLENBQXFCLCtCQUFyQjtFQURnQjs7RUFJbEIsWUFBQSxHQUFlLFNBQUMsU0FBRDtXQUNiLElBQUksQ0FBQyxZQUFMLENBQWtCLDhCQUFsQixFQUFrRCxTQUFTLENBQUMsV0FBVixDQUFBLENBQWxEO0VBRGE7O0VBR2YsY0FBQSxHQUFpQixTQUFBO1dBQ2YsSUFBSSxDQUFDLGVBQUwsQ0FBcUIsOEJBQXJCO0VBRGU7QUF2Q2pCIiwic291cmNlc0NvbnRlbnQiOlsicm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuXG5tb2R1bGUuZXhwb3J0cyA9XG4gIGFjdGl2YXRlOiAoc3RhdGUpIC0+XG4gICAgYXRvbS5jb25maWcub2JzZXJ2ZSAnb25lLWxpZ2h0LXVpLmZvbnRTaXplJywgKHZhbHVlKSAtPlxuICAgICAgc2V0Rm9udFNpemUodmFsdWUpXG5cbiAgICBhdG9tLmNvbmZpZy5vYnNlcnZlICdvbmUtbGlnaHQtdWkubGF5b3V0TW9kZScsICh2YWx1ZSkgLT5cbiAgICAgIHNldExheW91dE1vZGUodmFsdWUpXG5cbiAgICBhdG9tLmNvbmZpZy5vYnNlcnZlICdvbmUtbGlnaHQtdWkudGFiU2l6aW5nJywgKHZhbHVlKSAtPlxuICAgICAgc2V0VGFiU2l6aW5nKHZhbHVlKVxuXG4gIGRlYWN0aXZhdGU6IC0+XG4gICAgdW5zZXRGb250U2l6ZSgpXG4gICAgdW5zZXRMYXlvdXRNb2RlKClcbiAgICB1bnNldFRhYlNpemluZygpXG5cbiMgRm9udCBTaXplIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5zZXRGb250U2l6ZSA9IChjdXJyZW50Rm9udFNpemUpIC0+XG4gIGlmIE51bWJlci5pc0ludGVnZXIoY3VycmVudEZvbnRTaXplKVxuICAgIHJvb3Quc3R5bGUuZm9udFNpemUgPSBcIiN7Y3VycmVudEZvbnRTaXplfXB4XCJcbiAgZWxzZSBpZiBjdXJyZW50Rm9udFNpemUgaXMgJ0F1dG8nXG4gICAgdW5zZXRGb250U2l6ZSgpXG5cbnVuc2V0Rm9udFNpemUgPSAtPlxuICByb290LnN0eWxlLmZvbnRTaXplID0gJydcblxuIyBMYXlvdXQgTW9kZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuc2V0TGF5b3V0TW9kZSA9IChsYXlvdXRNb2RlKSAtPlxuICByb290LnNldEF0dHJpYnV0ZSgndGhlbWUtb25lLWxpZ2h0LXVpLWxheW91dG1vZGUnLCBsYXlvdXRNb2RlLnRvTG93ZXJDYXNlKCkpXG5cbnVuc2V0TGF5b3V0TW9kZSA9IC0+XG4gIHJvb3QucmVtb3ZlQXR0cmlidXRlKCd0aGVtZS1vbmUtbGlnaHQtdWktbGF5b3V0bW9kZScpXG5cbiMgVGFiIFNpemluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuc2V0VGFiU2l6aW5nID0gKHRhYlNpemluZykgLT5cbiAgcm9vdC5zZXRBdHRyaWJ1dGUoJ3RoZW1lLW9uZS1saWdodC11aS10YWJzaXppbmcnLCB0YWJTaXppbmcudG9Mb3dlckNhc2UoKSlcblxudW5zZXRUYWJTaXppbmcgPSAtPlxuICByb290LnJlbW92ZUF0dHJpYnV0ZSgndGhlbWUtb25lLWxpZ2h0LXVpLXRhYnNpemluZycpXG4iXX0=
