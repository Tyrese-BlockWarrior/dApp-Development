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
    baby.name = newBaby.name;
    baby.lastVisit = newBaby.lastVisit;
    baby.balanceDue = newBaby.balanceDue;
    baby.age = newBaby.age;
    baby.gender = newBaby.gender;
    baby.DoB = newBaby.DoB;
    baby.momId = newBaby.momId;
    baby.nextCheckUp = newBaby.nextCheckUp;
    baby.immunizations = newBaby.immunizations;
    baby.examinationNote = newBaby.examinationNote;
    baby.momId = newBaby.momId;
    // save the order
    const assetRegistry = await getAssetRegistry(baby.getFullyQualifiedType());
    await assetRegistry.add(baby);
}

async function addMom(newBaby) { // eslint-disable-line no-unused-vars

    const factory = getFactory();
    const namespace = 'org.acme.vehicle_network';

    const baby = factory.newResource(namespace, 'Mom', newBaby.username);
    baby.username = newBaby.username

    // save the order
    const assetRegistry = await getAssetRegistry(baby.getFullyQualifiedType());
    await assetRegistry.add(baby);
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
    baby.age = updateBaby.age;
    await vehicleRegistry.update(baby);
}

/*
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
}

/*
 * Update the status of an order
 * @param {org.acme.vehicle_network.addExaminationNote} note) - the immunization transaction
 * @transaction
 */
async function addExaminationNote(note) { // eslint-disable-line no-unused-vars
    const factory = getFactory();
    const namespace = 'org.acme.vehicle_network';

    // get vehicle registry
    const vehicleRegistry = await getAssetRegistry(namespace + '.Baby');
    const baby = await vehicleRegistry.get(note.babyId);
    baby.examinationNote.push(note.note);
    await vehicleRegistry.update(baby);
}

/*
 * Update the status of an order
 * @param {org.acme.vehicle_network.nextCheckUp} date) - the immunization transaction
 * @transaction
 */
async function nextCheckUp(date) { // eslint-disable-line no-unused-vars
    const factory = getFactory();
    const namespace = 'org.acme.vehicle_network';

    // get vehicle registry
    const vehicleRegistry = await getAssetRegistry(namespace + '.Baby');
    const baby = await vehicleRegistry.get(date.babyId);
    baby.nextCheckUp = date.date;
    await vehicleRegistry.update(baby);
}
