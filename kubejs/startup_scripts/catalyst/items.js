StartupEvents.registry('item', catalyst => {

  const registerIncomplete = (displayName, texture) => {
    const id = 'incomplete_' + displayName
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .trim()
      .replace(/\s+/g, '_')

    catalyst.create(id)
      .displayName(`Incomplete ${displayName}`)
      .maxStackSize(64)
      .texture(texture)
      
  }

  registerIncomplete('Containment Ingot', "catalyst:item/incomplete_containment_ingot")
  registerIncomplete("Imperfect Ingot", "catalyst:item/incomplete_imperfect_ingot")
})