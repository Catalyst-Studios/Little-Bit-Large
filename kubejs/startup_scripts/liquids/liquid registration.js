StartupEvents.registry('fluid', catalyst => {

  const registerliquid = (displayName) => {
    // "Incomplete Containment Vessel"
    // → "incomplete_containment_vessel"
    const id = 'liquid_' + displayName
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '') // remove weird chars
      .trim()
      .replace(/\s+/g, '_')

    catalyst.create(id)
          .displayName(`Liquid ${displayName}`)

          .stillTexture(`kubejs:block/${id}_still`)
          .flowingTexture(`kubejs:block/${id}_flow`)


      }
    const registermolten = (displayName) => {
          // "Incomplete Containment Vessel"
          // → "incomplete_containment_vessel"
          const id = 'molten_' + displayName
            .toLowerCase()
            .replace(/[^a-z0-9 ]/g, '') // remove weird chars
            .trim()
            .replace(/\s+/g, '_')

          catalyst.create(id)
                .displayName(`Molten ${displayName}`)

                .stillTexture(`kubejs:block/${id}_still`)
                .flowingTexture(`kubejs:block/${id}_flow`)



            }

  // Usage
  registerliquid('Darkness')
  registerliquid('Light')

})
//,0x80FFFFFF
//,0x80FFFFFF