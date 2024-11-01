export const shouldNotForwardPropsWithKeys =
  <CustomProps extends Record<string, any>>(props: Array<keyof CustomProps>) =>
  (propName: PropertyKey): boolean =>
    !props.map((p) => p.toString()).includes(propName.toString());
