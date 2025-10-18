<script lang="ts" setup>
const {
  error,
  label,
  name,
  disabled,
  type = "text",
} = defineProps<{
  error?: string;
  label: string;
  name: string;
  disabled?: boolean;
  type?: FieldType;
}>();

const fieldType = {
  text: "text",
  number: "number",
  textarea: "textarea",
};
type FieldType = keyof typeof fieldType;

const renderAs = computed(() => {
  switch (type) {
    case fieldType.textarea:
      return "textarea";
    case fieldType.text:
    case fieldType.number:
    default:
      return "input";
  }
});
</script>

<template>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">
      {{ label }}
    </legend>
    <Field
      :disabled="disabled"
      :as="renderAs"
      :name="name"
      :type="type"
      class="input w-full"
      :class="{
        'input-error': error,
        'input': type === 'text',
        'textarea': type === 'textarea',
      }"
    />
    <p v-if="error" class="label text-error">
      {{ error }}
    </p>
  </fieldset>
</template>
