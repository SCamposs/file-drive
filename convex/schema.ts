import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export const roles = v.union(v.literal('admin'), v.literal('member'))

export default defineSchema({
  files: defineTable({ name: v.string(), orgId: v.string() }).index(
    'by_orgId',
    ['orgId'],
  ),
  users: defineTable({
    tokenIdentifier: v.string(),
    orgIds: v.array(v.string()),
  }).index('by_tokenIdentifier', ['tokenIdentifier']),
})
