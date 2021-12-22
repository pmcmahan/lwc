import _lightningCombobox from "lightning/combobox";
import { registerTemplate } from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const { gid: api_scoped_id, c: api_custom_element } = $api;
  return [
    $cmp.field.isCombobox
      ? api_custom_element(
          "lightning-combobox",
          _lightningCombobox,
          {
            classMap: {
              input: true,
            },
            props: {
              value: $cmp.field.value,
              required: $cmp.field.required,
              name: $cmp.field.name,
              label: $cmp.field.label,
              ariaDescribedBy: api_scoped_id($cmp.field.name),
              disabled: $cmp.field.readOnly,
              options: $cmp.field.options,
            },
            key: 0,
          },
          []
        )
      : null,
  ];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
