/**
 * Place an order for a vehicle
 * @param {org.acme.vehicle_network.addBaby} newBaby - the transaction
 * @transaction
 */
async function addBaby(newBaby) { // eslint-disable-line no-unused-vars

    const factory = getFactory();
    const namespace = 'org.acme.vehicle_network';

    const baby = factory.newResource(namespace, 'Baby', newBaby.babyId);
    baby.babyId = newBaby.babyId;
    baby.detail = newBaby.detail;
    baby.mom = factory.newRelationship(namespace, 'Mom', newBaby.mom.getIdentifier());

    // save the order
    const assetRegistry = await getAssetRegistry(baby.getFullyQualifiedType());
    await assetRegistry.add(baby);
/*
    // emit the event
    const placeOrderEvent = factory.newEvent(namespace, 'PlaceOrderEvent');
    placeOrderEvent.orderId = baby.orderId;
    placeOrderEvent.vehicleDetails = baby.vehicleDetails;
    placeOrderEvent.options = baby.options;
    placeOrderEvent.orderer = baby.orderer;
    emit(placeOrderEvent);*/
}

/**
 * Update the status of an order
 * @param {org.acme.vehicle_network.UpdateStatus} update - the UpdateOrderStatus transaction
 * @transaction
 */
async function UpdateStatus(updateBaby) { // eslint-disable-line no-unused-vars
    const factory = getFactory();
    const namespace = 'org.acme.vehicle_network';

    // get vehicle registry
    const vehicleRegistry = await getAssetRegistry(namespace + '.Baby');
    const baby = await vehicleRegistry.get(updateBaby.babyId);
    baby.detail = updateBaby.detail;
    await vehicleRegistry.update(baby);
}

/*    // emit the event
    const updateOrderStatusEvent = factory.newEvent(namespace, 'UpdateOrderStatusEvent');
    updateOrderStatusEvent.orderStatus = update.order.orderStatus;
    updateOrderStatusEvent.order = update.order;
    emit(updateOrderStatusEvent);(/
}

 * Update the status of an order
 * @param {org.acme.vehicle_network.addImmunizations} immunization - the immunization transaction
 * @transaction
 */
async function addImmunizations(immunization) { // eslint-disable-line no-unused-vars
    const factory = getFactory();
    const namespace = 'org.acme.vehicle_network';

    // get vehicle registry
    const vehicleRegistry = await getAssetRegistry(namespace + '.Baby');
    const baby = await vehicleRegistry.get(immunization.babyId);
    baby.immunizations.push(immunization.vaccines);
    await vehicleRegistry.update(baby);

/*    // emit the event
    const updateOrderStatusEvent = factory.newEvent(namespace, 'UpdateOrderStatusEvent');
    updateOrderStatusEvent.orderStatus = update.order.orderStatus;
    updateOrderStatusEvent.order = update.order;
    emit(updateOrderStatusEvent);*/
}
