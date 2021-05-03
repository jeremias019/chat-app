async function selectUserHandler(userPayload) {
    // [...]
  
    await initializeChannel([username, userPayload.id]);
  };