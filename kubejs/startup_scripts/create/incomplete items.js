StartupEvents.registry('item', catalyst => {

  const registerIncomplete = (displayName) => {
    // "Incomplete Containment Vessel"
    // → "incomplete_containment_vessel"
    const id = 'incomplete_' + displayName
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '') // remove weird chars
      .trim()
      .replace(/\s+/g, '_')

    catalyst.create(id)
      .displayName(`Incomplete ${displayName}`)
      .maxStackSize(64)
      
  }

  // Usage
  registerIncomplete('Containment Ingot')


})
