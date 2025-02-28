export const storageService = {
    query,
    get,
    post,
    put,
    remove,
  }
  
  function query<T>(entityType: string, delay = 500): Promise<T[]> {
    const entities = JSON.parse(localStorage.getItem(entityType) || '[]') as T[]
    return new Promise(resolve => setTimeout(() => resolve(entities), delay))
  }
  
  function get<T>(entityType: string, entityId: string): Promise<T | null> {
    return query<T>(entityType).then(entities => {
      const entity = entities.find(entity => (entity as any)._id === entityId)
      if (!entity) throw new Error(`Get failed, cannot find entity with id: ${entityId} in: ${entityType}`)
      return entity
    })
  }
  
  function post<T extends { _id?: string }>(entityType: string, newEntity: T): Promise<T> {
    newEntity = { ...newEntity, _id: _makeId() }
    return query<T>(entityType).then(entities => {
      entities.push(newEntity)
      _save(entityType, entities)
      return newEntity
    })
  }
  
  function put<T extends { _id: string }>(entityType: string, updatedEntity: T): Promise<T> {
    return query<T>(entityType).then(entities => {
      const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
      if (idx < 0) throw new Error(`Update failed, cannot find entity with id: ${updatedEntity._id} in: ${entityType}`)
      entities.splice(idx, 1, updatedEntity)
      _save(entityType, entities)
      return updatedEntity
    })
  }
  
  function remove(entityType: string, entityId: string): Promise<void> {
    return query(entityType).then(entities => {
      const idx = entities.findIndex(entity => (entity as any)._id === entityId)
      if (idx < 0) throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`)
      entities.splice(idx, 1)
      _save(entityType, entities)
    })
  }
  
  // Private functions
  
  function _save(entityType: string, entities: any[]): void {
    localStorage.setItem(entityType, JSON.stringify(entities))
  }
  
  function _makeId(length = 5): string {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    return Array.from({ length }, () => possible.charAt(Math.floor(Math.random() * possible.length))).join('')
  }
  