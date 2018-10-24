package com.enigma.dev.controller;


import com.enigma.dev.model.AttendenceDto;
import com.enigma.dev.model.Request;
import com.enigma.dev.model.StudentDto;
import com.enigma.dev.model.StudentSaveDto;
import com.enigma.dev.service.ServiceConnector;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ApiController {
    private static Logger logger = LoggerFactory.getLogger(ApiController.class);

    @Autowired
    private ServiceConnector connector;

    @CrossOrigin(value = "*")
    @PostMapping("/searchAllStudents")
    public ResponseEntity<?> searchAllStudents() {
        logger.info("ApiController:: searchAllStudents");
        String result = connector.connectRs("", "searchAllStudents");

        Gson gson = new GsonBuilder().create();
        Object obj = gson.fromJson(result, Object.class);
        List<StudentDto> studentDtoList = (List<StudentDto>) obj;

        logger.info("ApiController:: searchAllStudents :: studentDtoList: " + studentDtoList.toString());

        return new ResponseEntity(studentDtoList, HttpStatus.OK);
    }

    @CrossOrigin(value = "*")
    @PostMapping("/searchByStudentId")
    public ResponseEntity<?> searchByStudentId(@RequestBody Request request) {
        logger.info("ApiController::searchByStudentId " + request.getStudentId());

        Gson gson = new GsonBuilder().create();
        String inputJson = gson.toJson(request);

        String result = connector.connectRs(inputJson, "searchByStudentId");

        Object obj = gson.fromJson(result, StudentDto.class);
        StudentDto studentDto = (StudentDto) obj;

        logger.info("ApiController::searchByStudentId" + studentDto.toString());
        return new ResponseEntity(studentDto, HttpStatus.OK);
    }

    @CrossOrigin(value = "*")
    @PostMapping("/getAttendence")
    public ResponseEntity<?> getAttendence() {
        logger.info("ApiController:: getAttendence");
        String result = connector.connectRs("", "getAttendence");

        Gson gson = new GsonBuilder().create();
        Object obj = gson.fromJson(result, Object.class);
        List<AttendenceDto> studentDtoList = (List<AttendenceDto>) obj;

        logger.info("ApiController:: getAttendence ::" + studentDtoList.toString());

        return new ResponseEntity(studentDtoList, HttpStatus.OK);
    }


    @CrossOrigin(value = "*")
    @PostMapping("/giveAttendence")
    public ResponseEntity<?> giveAttendence(@RequestBody AttendenceDto attendenceDto) {
        logger.info("ApiController:: giveAttendence:: " + attendenceDto.toString());
        Gson gson = new GsonBuilder().create();
        String inputJson = gson.toJson(attendenceDto);
        String result = connector.connectRs(inputJson, "giveAttendence");


        Object obj = gson.fromJson(result, Object.class);
        List<AttendenceDto> attendenceDtoList = (List<AttendenceDto>) obj;

        logger.info("ApiController:: giveAttendence ::" + attendenceDtoList.toString());

        return new ResponseEntity(attendenceDtoList, HttpStatus.OK);
    }


    @CrossOrigin(value = "*")
    @PostMapping("/saveStudentInfo")
    public ResponseEntity<?> saveStudentInfo(@RequestBody StudentSaveDto studentSaveDto) {
        logger.info("ApiController:: saveStudentInfo:: " + studentSaveDto.toString());
        Gson gson = new GsonBuilder().create();
        String inputJson = gson.toJson(studentSaveDto);
        String result = connector.connectRs(inputJson, "saveStudentInfo");


        Object obj = gson.fromJson(result, Object.class);
        List<StudentSaveDto> studentSaveDtoList = (List<StudentSaveDto>) obj;
        logger.info("ApiController:: StudentSaveDto ::" + studentSaveDtoList.toString());

        return new ResponseEntity(studentSaveDtoList, HttpStatus.OK);
    }


}
