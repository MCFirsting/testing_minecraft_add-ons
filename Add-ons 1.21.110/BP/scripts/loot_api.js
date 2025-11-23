import { world, system } from "@minecraft/server"
system.beforeEvents.startup.subscribe(ev => {
    ev.itemComponentRegistry.registerCustomComponent("demo:loot_api", {
        onUseOn: e => {
            if (e.block) {
                //กำหนดให้ไอเทมใช่งานแบบของดรอป (getLootTableManager)
                const stacks = world.getLootTableManager().generateLootFromBlock(e.block, e.itemStack)
                if (stacks) {
                    for (const stack of stacks) {
                        e.block.dimension.spawnItem(stack, e.block.location)
                        //เกิดไอเทมผ่านการอ้างอิง (getLootTableManager)
                    }
                }
            }
        }
    })
})