import _lightningInput from "lightning/input";
import { registerTemplate } from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const { gid: api_scoped_id, c: api_custom_element } = $api;
  return [
    $cmp.field.isInput
      ? api_custom_element(
          "lightning-input",
          _lightningInput,
          {
            classMap: {
              input: true,
            },
            props: {
              type: $cmp.field.inputType,
              label: $cmp.field.label,
              name: $cmp.field.name,
              value: $cmp.field.value,
              maxLength: $cmp.field.maxLength,
              required: $cmp.field.required,
              ariaDescribedBy: api_scoped_id($cmp.field.name),
              disabled: $cmp.field.readOnly,
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
